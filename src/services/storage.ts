import { AdmissionInquiry, FirebaseConfig } from '../types';
import { INITIAL_INQUIRIES } from '../data/initialData';

const STORAGE_KEY = 'kls_inquiries_v2';
const FIREBASE_CONFIG_KEY = 'kls_firebase_config_v2';

export const storageService = {
  getInquiries(): AdmissionInquiry[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
      // Seed default data
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INQUIRIES));
      return INITIAL_INQUIRIES;
    } catch (e) {
      console.warn('LocalStorage error, using fallback data:', e);
      return INITIAL_INQUIRIES;
    }
  },

  saveInquiries(inquiries: AdmissionInquiry[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiries));
    } catch (e) {
      console.error('Error saving inquiries to LocalStorage:', e);
    }
  },

  addInquiry(newInquiry: Omit<AdmissionInquiry, 'id' | 'createdAt' | 'status'>): AdmissionInquiry {
    const list = this.getInquiries();
    const count = list.length + 1001;
    const entry: AdmissionInquiry = {
      ...newInquiry,
      id: `KLS-2027-${count}`,
      createdAt: new Date().toISOString(),
      status: 'নতুন',
      adminNotes: ''
    };
    const updated = [entry, ...list];
    this.saveInquiries(updated);

    // If Firebase configured, try background sync
    this.syncToFirebaseIfConfigured(entry);

    return entry;
  },

  updateStatus(id: string, status: AdmissionInquiry['status'], adminNotes?: string): AdmissionInquiry[] {
    const list = this.getInquiries();
    const updated = list.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status,
          ...(adminNotes !== undefined ? { adminNotes } : {})
        };
      }
      return item;
    });
    this.saveInquiries(updated);
    return updated;
  },

  deleteInquiry(id: string): AdmissionInquiry[] {
    const list = this.getInquiries();
    const updated = list.filter(item => item.id !== id);
    this.saveInquiries(updated);
    return updated;
  },

  resetToDefault(): AdmissionInquiry[] {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INQUIRIES));
    return INITIAL_INQUIRIES;
  },

  // Firebase Configuration Storage
  getFirebaseConfig(): FirebaseConfig | null {
    try {
      const stored = localStorage.getItem(FIREBASE_CONFIG_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn('Failed reading Firebase config:', e);
    }
    return null;
  },

  saveFirebaseConfig(config: FirebaseConfig): void {
    try {
      localStorage.setItem(FIREBASE_CONFIG_KEY, JSON.stringify(config));
    } catch (e) {
      console.error('Error saving Firebase config:', e);
    }
  },

  clearFirebaseConfig(): void {
    localStorage.removeItem(FIREBASE_CONFIG_KEY);
  },

  async syncToFirebaseIfConfigured(entry: AdmissionInquiry) {
    const config = this.getFirebaseConfig();
    if (!config || !config.projectId || !config.apiKey) return;
    try {
      // Direct REST fallback for Firebase Firestore without heavy bundle
      const url = `https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/(default)/documents/inquiries?documentId=${entry.id}&key=${config.apiKey}`;
      const fields = {
        id: { stringValue: entry.id },
        studentName: { stringValue: entry.studentName },
        gender: { stringValue: entry.gender },
        targetClass: { stringValue: entry.targetClass },
        branch: { stringValue: entry.branch },
        parentName: { stringValue: entry.parentName },
        phone: { stringValue: entry.phone },
        address: { stringValue: entry.address },
        notes: { stringValue: entry.notes || '' },
        status: { stringValue: entry.status },
        createdAt: { stringValue: entry.createdAt }
      };

      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields })
      });
      console.log('Synced inquiry to Firebase Firestore:', entry.id);
    } catch (err) {
      console.warn('Firebase REST sync warning (local cache retained):', err);
    }
  }
};
