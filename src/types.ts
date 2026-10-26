export type BranchType = 'general' | 'hifz' | 'cultural' | 'daycare';

export type ApplicationStatus = 'নতুন' | 'যোগাযোগ সম্পন্ন' | 'ভর্তি নিশ্চিত' | 'বাতিল';

export interface AdmissionInquiry {
  id: string;
  studentName: string;
  gender: 'ছেলে' | 'মেয়ে';
  targetClass: string;
  branch: BranchType;
  parentName: string;
  phone: string;
  email?: string;
  address: string;
  previousSchool?: string;
  notes?: string;
  status: ApplicationStatus;
  createdAt: string; // ISO string
  adminNotes?: string;
}

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}
