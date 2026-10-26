import React, { useState, useEffect } from 'react';
import { 
  X, Lock, ShieldCheck, Search, Filter, Trash2, Download, Plus, 
  CheckCircle, Clock, Phone, AlertCircle, RefreshCw, Database, 
  ExternalLink, LogOut, ChevronRight, MessageSquare
} from 'lucide-react';
import { AdmissionInquiry, ApplicationStatus, BranchType, FirebaseConfig } from '../types';
import { storageService } from '../services/storage';
import { AVAILABLE_CLASSES } from '../data/initialData';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  
  // Data state
  const [inquiries, setInquiries] = useState<AdmissionInquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('সকল');
  const [branchFilter, setBranchFilter] = useState<string>('সকল');
  
  // Modals & Tabs
  const [selectedInquiry, setSelectedInquiry] = useState<AdmissionInquiry | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showFirebaseModal, setShowFirebaseModal] = useState(false);
  
  // Firebase configuration state
  const [firebaseConfig, setFirebaseConfig] = useState<FirebaseConfig>({
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  });
  const [firebaseStatus, setFirebaseStatus] = useState<string>('');

  // Manual entry state
  const [manualForm, setManualForm] = useState({
    studentName: '',
    gender: 'ছেলে' as 'ছেলে' | 'মেয়ে',
    targetClass: 'প্লে (Play)',
    branch: 'general' as BranchType,
    parentName: '',
    phone: '',
    address: '',
    notes: 'অফিস ডেস্কে সরাসরি আবেদন'
  });

  useEffect(() => {
    if (isOpen) {
      loadData();
      const cfg = storageService.getFirebaseConfig();
      if (cfg) setFirebaseConfig(cfg);
    }
  }, [isOpen]);

  const loadData = () => {
    const data = storageService.getInquiries();
    setInquiries(data);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'admin123') {
      setIsAuthenticated(true);
      setLoginError('');
      loadData();
    } else {
      setLoginError('ভুল পাসওয়ার্ড! সঠিক পাসওয়ার্ডটি হলো: admin123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasswordInput('');
    setLoginError('');
  };

  const handleStatusChange = (id: string, newStatus: ApplicationStatus) => {
    const updated = storageService.updateStatus(id, newStatus);
    setInquiries(updated);
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: newStatus });
    }
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`আপনি কি নিশ্চিত যে "${name}"-এর আবেদনটি মুছে ফেলতে চান?`)) {
      const updated = storageService.deleteInquiry(id);
      setInquiries(updated);
      if (selectedInquiry?.id === id) setSelectedInquiry(null);
    }
  };

  const handleUpdateAdminNotes = (id: string, notes: string) => {
    const item = inquiries.find(i => i.id === id);
    if (!item) return;
    const updated = storageService.updateStatus(id, item.status, notes);
    setInquiries(updated);
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, adminNotes: notes });
    }
  };

  const handleAddManual = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualForm.studentName || !manualForm.parentName || !manualForm.phone) {
      alert('অনুগ্রহ করে নাম, অভিভাবকের নাম ও মোবাইল নম্বর পূরণ করুন।');
      return;
    }
    const created = storageService.addInquiry({
      studentName: manualForm.studentName,
      gender: manualForm.gender,
      targetClass: manualForm.targetClass,
      branch: manualForm.branch,
      parentName: manualForm.parentName,
      phone: manualForm.phone,
      address: manualForm.address || 'খুলনা',
      notes: manualForm.notes
    });
    setInquiries([created, ...inquiries]);
    setShowAddModal(false);
    setManualForm({
      studentName: '',
      gender: 'ছেলে',
      targetClass: 'প্লে (Play)',
      branch: 'general',
      parentName: '',
      phone: '',
      address: '',
      notes: ''
    });
  };

  const handleSaveFirebaseConfig = (e: React.FormEvent) => {
    e.preventDefault();
    storageService.saveFirebaseConfig(firebaseConfig);
    setFirebaseStatus('ফায়ারবেস কনফিগারেশন সফলভাবে সংরক্ষিত হয়েছে!');
    setTimeout(() => setFirebaseStatus(''), 3000);
  };

  // CSV Export
  const handleExportCSV = () => {
    const headers = ['ID', 'শিক্ষার্থীর নাম', 'লিঙ্গ', 'শ্রেণি', 'বিভাগ', 'অভিভাবক', 'মোবাইল', 'ঠিকানা', 'অবস্থা', 'তারিখ', 'অফিস নোট'];
    const rows = filteredInquiries.map(item => [
      item.id,
      `"${item.studentName}"`,
      item.gender,
      `"${item.targetClass}"`,
      item.branch,
      `"${item.parentName}"`,
      `"${item.phone}"`,
      `"${item.address}"`,
      item.status,
      new Date(item.createdAt).toLocaleDateString('bn-BD'),
      `"${item.adminNotes || ''}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `KLS_Admission_Inquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  // Filter logic
  const filteredInquiries = inquiries.filter(item => {
    const matchesSearch = 
      item.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.parentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone.includes(searchQuery) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'সকল' || item.status === statusFilter;
    const matchesBranch = branchFilter === 'সকল' || item.branch === branchFilter;

    return matchesSearch && matchesStatus && matchesBranch;
  });

  // Stats
  const totalCount = inquiries.length;
  const newCount = inquiries.filter(i => i.status === 'নতুন').length;
  const confirmedCount = inquiries.filter(i => i.status === 'ভর্তি নিশ্চিত').length;
  const hifzCount = inquiries.filter(i => i.branch === 'hifz').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/80 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-6xl max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="bg-emerald-950 text-white px-6 py-4 flex items-center justify-between border-b border-emerald-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400 text-stone-900 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>লিজেন্ড এডমিন ম্যানেজমেন্ট ড্যাশবোর্ড</span>
                <span className="text-[10px] bg-emerald-800 text-amber-300 px-2 py-0.5 rounded-full font-mono">
                  v2.0
                </span>
              </h2>
              <p className="text-xs text-emerald-300">
                খুলনা লিজেন্ড স্কুল • ২০২৭ শিক্ষাবর্ষের আবেদন ও তথ্য ব্যবস্থাপনা
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-emerald-200 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>লগআউট</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-emerald-300 hover:text-white hover:bg-emerald-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {!isAuthenticated ? (
          /* Password Login Gate */
          <div className="p-8 sm:p-14 flex flex-col items-center justify-center max-w-md mx-auto my-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shadow-inner">
              <Lock className="w-8 h-8 text-emerald-700" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-stone-900">
                এডমিন প্যানেলে প্রবেশ করুন
              </h3>
              <p className="text-xs text-stone-500">
                শুধুমাত্র খুলনা লিজেন্ড স্কুলের দায়িত্বপ্রাপ্ত প্রশাসনিক কর্মকর্তাদের জন্য সংরক্ষিত।
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              <div className="space-y-1 text-left">
                <label className="text-xs font-bold text-stone-700 block">
                  এডমিন পাসওয়ার্ড
                </label>
                <input
                  type="password"
                  placeholder="পাসওয়ার্ড লিখুন..."
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 font-mono text-sm"
                />
              </div>

              {loginError && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-600 text-left flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{loginError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer text-sm"
              >
                লগইন করুন
              </button>
            </form>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
              <span className="font-bold">টেস্টিং নির্দেশিকা:</span> পাসওয়ার্ড হলো <span className="font-mono font-bold bg-amber-200 px-1.5 py-0.5 rounded">admin123</span>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            
            {/* KPI Stats Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                <span className="text-xs font-semibold text-stone-500 block">মোট আবেদন জমা</span>
                <span className="text-2xl sm:text-3xl font-bold font-sans text-stone-900 tabular-nums">
                  {totalCount}
                </span>
                <span className="text-[11px] text-stone-400 block mt-0.5">অনলাইন ও সরাসরি</span>
              </div>

              <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200">
                <span className="text-xs font-semibold text-amber-800 block">নতুন আবেদন (অমীমাংসিত)</span>
                <span className="text-2xl sm:text-3xl font-bold font-sans text-amber-900 tabular-nums">
                  {newCount}
                </span>
                <span className="text-[11px] text-amber-700 block mt-0.5">যোগাযোগ করা প্রয়োজন</span>
              </div>

              <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200">
                <span className="text-xs font-semibold text-emerald-800 block">ভর্তি নিশ্চিত সম্পন্ন</span>
                <span className="text-2xl sm:text-3xl font-bold font-sans text-emerald-900 tabular-nums">
                  {confirmedCount}
                </span>
                <span className="text-[11px] text-emerald-700 block mt-0.5">সেশন ২০২৭ কনফার্মড</span>
              </div>

              <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-200">
                <span className="text-xs font-semibold text-blue-800 block">হিফজুল কুরআন বিভাগ</span>
                <span className="text-2xl sm:text-3xl font-bold font-sans text-blue-900 tabular-nums">
                  {hifzCount}
                </span>
                <span className="text-[11px] text-blue-700 block mt-0.5">তাজবিদ ও নাজেরা শাখা</span>
              </div>
            </div>

            {/* Action Bar & Filters */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-200">
              
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="শিক্ষার্থীর নাম, অভিভাবক, ফোন বা ট্র্যাকিং আইডি দিয়ে খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              {/* Status and Branch Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 text-xs bg-white rounded-xl border border-stone-200 font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-700 cursor-pointer"
                >
                  <option value="সকল">সব স্ট্যাটাস</option>
                  <option value="নতুন">নতুন</option>
                  <option value="যোগাযোগ সম্পন্ন">যোগাযোগ সম্পন্ন</option>
                  <option value="ভর্তি নিশ্চিত">ভর্তি নিশ্চিত</option>
                  <option value="বাতিল">বাতিল</option>
                </select>

                <select
                  value={branchFilter}
                  onChange={(e) => setBranchFilter(e.target.value)}
                  className="px-3 py-2 text-xs bg-white rounded-xl border border-stone-200 font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-700 cursor-pointer"
                >
                  <option value="সকল">সব শাখা</option>
                  <option value="general">জেনারেল স্কুল</option>
                  <option value="hifz">হিফজুল কুরআন</option>
                  <option value="cultural">কালচারাল একাডেমি</option>
                  <option value="daycare">ডে-কেয়ার</option>
                </select>

                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 rounded-xl border border-stone-200 transition-colors cursor-pointer"
                  title="সিএসভি এক্সেল ফরম্যাটে ডাউনলোড"
                >
                  <Download className="w-3.5 h-3.5 text-stone-600" />
                  <span>এক্সেল এক্সপোর্ট</span>
                </button>

                <button
                  onClick={() => setShowAddModal(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>ম্যানুয়াল এন্ট্রি</span>
                </button>

                <button
                  onClick={() => setShowFirebaseModal(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 rounded-xl border border-amber-300 transition-colors cursor-pointer"
                  title="ফায়ারবেস ডাটাবেজ কনফিগারেশন"
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>ফায়ারবেস সংযোগ</span>
                </button>
              </div>

            </div>

            {/* Inquiries Table */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-stone-50 border-b border-stone-200 text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                      <th className="py-3 px-4">আইডি</th>
                      <th className="py-3 px-4">শিক্ষার্থী ও শ্রেণি</th>
                      <th className="py-3 px-4">শাখা</th>
                      <th className="py-3 px-4">পিতা/অভিভাবক ও ফোন</th>
                      <th className="py-3 px-4">তারিখ</th>
                      <th className="py-3 px-4">বর্তমান অবস্থা</th>
                      <th className="py-3 px-4 text-right">পদক্ষেপ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-xs text-stone-800">
                    {filteredInquiries.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-stone-400">
                          কোনো আবেদন খুঁজে পাওয়া যায়নি।
                        </td>
                      </tr>
                    ) : (
                      filteredInquiries.map((item) => (
                        <tr key={item.id} className="hover:bg-stone-50/80 transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-emerald-900">
                            {item.id}
                          </td>
                          <td className="py-3 px-4">
                            <span className="font-bold text-stone-900 block">{item.studentName}</span>
                            <span className="text-[11px] text-stone-500">{item.targetClass} ({item.gender})</span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-[11px] font-medium text-stone-700">
                              {item.branch === 'general' ? 'জেনারেল স্কুল' :
                               item.branch === 'hifz' ? 'হিফজুল কুরআন' :
                               item.branch === 'cultural' ? 'কালচারাল একাডেমি' : 'ডে-কেয়ার'}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="block font-medium">{item.parentName}</span>
                            <a href={`tel:${item.phone}`} className="font-mono text-emerald-800 hover:underline">
                              {item.phone}
                            </a>
                          </td>
                          <td className="py-3 px-4 text-stone-500 text-[11px] whitespace-nowrap">
                            {new Date(item.createdAt).toLocaleDateString('bn-BD')}
                          </td>
                          <td className="py-3 px-4">
                            <select
                              value={item.status}
                              onChange={(e) => handleStatusChange(item.id, e.target.value as ApplicationStatus)}
                              className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border cursor-pointer focus:outline-none ${
                                item.status === 'ভর্তি নিশ্চিত'
                                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                  : item.status === 'যোগাযোগ সম্পন্ন'
                                  ? 'bg-blue-50 text-blue-800 border-blue-300'
                                  : item.status === 'বাতিল'
                                  ? 'bg-rose-50 text-rose-800 border-rose-300'
                                  : 'bg-amber-50 text-amber-900 border-amber-300'
                              }`}
                            >
                              <option value="নতুন">নতুন</option>
                              <option value="যোগাযোগ সম্পন্ন">যোগাযোগ সম্পন্ন</option>
                              <option value="ভর্তি নিশ্চিত">ভর্তি নিশ্চিত</option>
                              <option value="বাতিল">বাতিল</option>
                            </select>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => setSelectedInquiry(item)}
                                className="px-2.5 py-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-md transition-colors cursor-pointer"
                              >
                                বিবরণ
                              </button>
                              <button
                                onClick={() => handleDelete(item.id, item.studentName)}
                                className="p-1 text-stone-400 hover:text-rose-600 transition-colors cursor-pointer"
                                title="আবেদন মুছে ফেলুন"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Inquiries Count footer */}
            <div className="flex items-center justify-between text-xs text-stone-500 pt-2">
              <span>প্রদর্শন হচ্ছে: {filteredInquiries.length} টি আবেদন (সর্বমোট {inquiries.length})</span>
              <button
                onClick={() => {
                  if (window.confirm('সব তথ্য কি প্রাথমিক ডেমো ডেটায় রিসেট করতে চান?')) {
                    const res = storageService.resetToDefault();
                    setInquiries(res);
                  }
                }}
                className="text-stone-400 hover:text-stone-600 hover:underline cursor-pointer"
              >
                ডেমো ডেটা রিলোড
              </button>
            </div>

          </div>
        )}

      </div>

      {/* Detail View Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 border border-stone-200 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div>
                <span className="text-[11px] font-mono text-emerald-800 font-bold block">{selectedInquiry.id}</span>
                <h3 className="text-xl font-bold text-stone-900">{selectedInquiry.studentName}</h3>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-3 bg-stone-50 p-4 rounded-xl border border-stone-200">
                <div>
                  <span className="text-stone-500 text-xs block">কাঙ্ক্ষিত শ্রেণি:</span>
                  <span className="font-bold text-stone-900">{selectedInquiry.targetClass}</span>
                </div>
                <div>
                  <span className="text-stone-500 text-xs block">লিঙ্গ:</span>
                  <span className="font-semibold text-stone-900">{selectedInquiry.gender}</span>
                </div>
                <div>
                  <span className="text-stone-500 text-xs block">পিতা/অভিভাবক:</span>
                  <span className="font-semibold text-stone-900">{selectedInquiry.parentName}</span>
                </div>
                <div>
                  <span className="text-stone-500 text-xs block">মোবাইল নম্বর:</span>
                  <span className="font-mono font-bold text-stone-900">{selectedInquiry.phone}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-stone-500 text-xs block">বর্তমান ঠিকানা:</span>
                  <span className="text-stone-800">{selectedInquiry.address}</span>
                </div>
                {selectedInquiry.previousSchool && (
                  <div className="col-span-2">
                    <span className="text-stone-500 text-xs block">পূর্ববর্তী বিদ্যালয়:</span>
                    <span className="text-stone-800">{selectedInquiry.previousSchool}</span>
                  </div>
                )}
                {selectedInquiry.notes && (
                  <div className="col-span-2">
                    <span className="text-stone-500 text-xs block">অভিভাবকের মন্তব্য:</span>
                    <span className="text-stone-700 italic">{selectedInquiry.notes}</span>
                  </div>
                )}
              </div>

              {/* Status Selector */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 block">আবেদন স্থিতি পরিবর্তন:</label>
                <select
                  value={selectedInquiry.status}
                  onChange={(e) => handleStatusChange(selectedInquiry.id, e.target.value as ApplicationStatus)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 bg-white"
                >
                  <option value="নতুন">নতুন (New)</option>
                  <option value="যোগাযোগ সম্পন্ন">যোগাযোগ সম্পন্ন (Contacted)</option>
                  <option value="ভর্তি নিশ্চিত">ভর্তি নিশ্চিত (Confirmed)</option>
                  <option value="বাতিল">বাতিল (Cancelled)</option>
                </select>
              </div>

              {/* Admin Internal Notes */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 block">অফিসিয়াল প্রশাসনিক নোট:</label>
                <textarea
                  rows={3}
                  placeholder="যেমন: অভিভাবকের সাথে কথা হয়েছে, ২৫ অক্টোবর আসবেন..."
                  defaultValue={selectedInquiry.adminNotes || ''}
                  onBlur={(e) => handleUpdateAdminNotes(selectedInquiry.id, e.target.value)}
                  className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                ></textarea>
                <span className="text-[10px] text-stone-400 block">* বাইরে ক্লিক করলেই নোট স্বয়ংক্রিয়ভাবে সেভ হবে</span>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="pt-2 flex items-center justify-between gap-3 border-t border-stone-200">
              <a
                href={`tel:${selectedInquiry.phone}`}
                className="flex-1 py-2 px-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>সরাসরি কল দিন</span>
              </a>
              <a
                href={`https://wa.me/88${selectedInquiry.phone.replace(/[-\s]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>হোয়াটসঅ্যাপ মেসেজ</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Manual Entry Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-4 border border-stone-200 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <h3 className="text-lg font-bold text-stone-900">অফিস ডেস্কে সরাসরি আবেদন এন্ট্রি</h3>
              <button onClick={() => setShowAddModal(false)} className="text-stone-400 hover:text-stone-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddManual} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-stone-700 block mb-1">শিক্ষার্থীর নাম *</label>
                <input
                  type="text"
                  required
                  placeholder="নাম লিখুন"
                  value={manualForm.studentName}
                  onChange={(e) => setManualForm({ ...manualForm, studentName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">কাঙ্ক্ষিত শ্রেণি</label>
                  <select
                    value={manualForm.targetClass}
                    onChange={(e) => setManualForm({ ...manualForm, targetClass: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300"
                  >
                    {AVAILABLE_CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">শাখা</label>
                  <select
                    value={manualForm.branch}
                    onChange={(e) => setManualForm({ ...manualForm, branch: e.target.value as BranchType })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300"
                  >
                    <option value="general">জেনারেল</option>
                    <option value="hifz">হিফজুল কুরআন</option>
                    <option value="cultural">কালচারাল একাডেমি</option>
                    <option value="daycare">ডে-কেয়ার</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">পিতা / অভিভাবক *</label>
                <input
                  type="text"
                  required
                  placeholder="অভিভাবকের নাম"
                  value={manualForm.parentName}
                  onChange={(e) => setManualForm({ ...manualForm, parentName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300"
                />
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">মোবাইল নম্বর *</label>
                <input
                  type="tel"
                  required
                  placeholder="01XXXXXXXXX"
                  value={manualForm.phone}
                  onChange={(e) => setManualForm({ ...manualForm, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono"
                />
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">ঠিকানা</label>
                <input
                  type="text"
                  placeholder="ঠিকানা লিখুন"
                  value={manualForm.address}
                  onChange={(e) => setManualForm({ ...manualForm, address: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold"
                >
                  সংরক্ষণ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Firebase Database Config Modal */}
      {showFirebaseModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-4 border border-stone-200 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-amber-600" />
                <h3 className="text-lg font-bold text-stone-900">ফায়ারবেস ক্লাউড ডেটাবেজ সেটিংস</h3>
              </div>
              <button onClick={() => setShowFirebaseModal(false)} className="text-stone-400 hover:text-stone-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              খুলনা লিজেন্ড স্কুলের জন্য ক্লাউড ফায়ারস্টোর (Firestore Database) সিঙ্ক সক্রিয় করতে আপনার ফায়ারবেস প্রজেক্টের ক্রিডেনশিয়াল প্রদান করতে পারেন। না দিলেও ব্রাউজারের লোকাল মেমোরিতে সব আবেদন নিরাপদ থাকবে।
            </p>

            <form onSubmit={handleSaveFirebaseConfig} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-stone-700 block mb-0.5">Project ID</label>
                <input
                  type="text"
                  placeholder="যেমন: khulna-legend-school-2027"
                  value={firebaseConfig.projectId}
                  onChange={(e) => setFirebaseConfig({ ...firebaseConfig, projectId: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono"
                />
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-0.5">Web API Key</label>
                <input
                  type="password"
                  placeholder="AIzaSy..."
                  value={firebaseConfig.apiKey}
                  onChange={(e) => setFirebaseConfig({ ...firebaseConfig, apiKey: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono"
                />
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-0.5">App ID (ঐচ্ছিক)</label>
                <input
                  type="text"
                  placeholder="1:387716328687:web:..."
                  value={firebaseConfig.appId}
                  onChange={(e) => setFirebaseConfig({ ...firebaseConfig, appId: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono"
                />
              </div>

              {firebaseStatus && (
                <div className="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-lg text-xs font-semibold">
                  {firebaseStatus}
                </div>
              )}

              <div className="pt-3 flex items-center justify-between border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => {
                    storageService.clearFirebaseConfig();
                    setFirebaseConfig({
                      apiKey: '',
                      authDomain: '',
                      projectId: '',
                      storageBucket: '',
                      messagingSenderId: '',
                      appId: ''
                    });
                    setFirebaseStatus('কনফিগারেশন মুছে দেওয়া হয়েছে (লোকাল স্টোরেজ কার্যকর)');
                  }}
                  className="text-rose-600 hover:underline text-xs"
                >
                  কনফিগ মুছুন
                </button>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowFirebaseModal(false)}
                    className="px-4 py-2 rounded-lg bg-stone-100 text-stone-700 font-semibold"
                  >
                    বন্ধ করুন
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold"
                  >
                    সেভ ও সক্রিয় করুন
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
