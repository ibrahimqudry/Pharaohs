import { useEffect, useState } from 'react';
import styles from './EditorStyles.module.css';
import {
  faChartLine,
  faHandshake,
  faBuilding,
  faMapMarkedAlt,
  faMoneyBillWave,
  faShieldAlt,
  faCertificate,
  faPercentage,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';
import { db } from '../../firebase/config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export default function InvestmentEditor() {
  const [investmentOpportunities, setInvestmentOpportunities] = useState([]);
  const [investmentBenefits, setInvestmentBenefits] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Opportunities
      const oppSnap = await getDocs(collection(db, 'investmentOpportunities'));
      setInvestmentOpportunities(oppSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      // Benefits
      const benSnap = await getDocs(collection(db, 'investmentBenefits'));
      setInvestmentBenefits(benSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      // FAQs
      const faqSnap = await getDocs(collection(db, 'investmentFaqs'));
      setFaqs(faqSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  // State for editing
  const [editingOpportunity, setEditingOpportunity] = useState(null);
  const [editingBenefit, setEditingBenefit] = useState(null);
  const [editingFaq, setEditingFaq] = useState(null);

  // State for adding new items
  const [newOpportunity, setNewOpportunity] = useState({
    title: "",
    icon: "faBuilding",
    description: "",
    minInvestment: "",
    expectedReturn: "",
    period: ""
  });

  const [newBenefit, setNewBenefit] = useState({
    icon: "faChartLine",
    title: "",
    description: ""
  });

  const [newFaq, setNewFaq] = useState({
    question: "",
    answer: ""
  });

  // Icon options for dropdowns
  const iconOptions = [
    { value: "chartLine", label: "رسم بياني" },
    { value: "handshake", label: "مصافحة" },
    { value: "building", label: "مبنى" },
    { value: "mapMarkedAlt", label: "خريطة" },
    { value: "moneyBillWave", label: "نقود" },
    { value: "shieldAlt", label: "درع" },
    { value: "certificate", label: "شهادة" },
    { value: "percentage", label: "نسبة مئوية" },
    { value: "questionCircle", label: "علامة استفهام" }
  ];


  // Handlers for investment opportunities
  const handleEditOpportunity = (opportunity) => {
    setEditingOpportunity({ ...opportunity });
    setEditingBenefit(null);
    setEditingFaq(null);
  };

  const handleUpdateOpportunity = async () => {
    const oppDoc = doc(db, 'investmentOpportunities', editingOpportunity.id);
    await updateDoc(oppDoc, editingOpportunity);
    const oppSnap = await getDocs(collection(db, 'investmentOpportunities'));
    setInvestmentOpportunities(oppSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    setEditingOpportunity(null);
    alert('تم التعديل بنجاح');
  };

  const handleAddOpportunity = async () => {
    await addDoc(collection(db, 'investmentOpportunities'), newOpportunity);
    const oppSnap = await getDocs(collection(db, 'investmentOpportunities'));
    setInvestmentOpportunities(oppSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    setNewOpportunity({
      title: "",
      icon: "faBuilding",
      description: "",
      minInvestment: "",
      expectedReturn: "",
      period: ""
    });
    alert('تمت الإضافة بنجاح');
  };

  const handleDeleteOpportunity = async (id) => {
    await deleteDoc(doc(db, 'investmentOpportunities', id));
    const oppSnap = await getDocs(collection(db, 'investmentOpportunities'));
    setInvestmentOpportunities(oppSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    if (editingOpportunity && editingOpportunity.id === id) {
      setEditingOpportunity(null);
    }
    alert('تم الحذف بنجاح');
  };

  // Handlers for investment benefits
  const handleEditBenefit = (benefit) => {
    setEditingBenefit({ ...benefit });
    setEditingOpportunity(null);
    setEditingFaq(null);
  };

  const handleUpdateBenefit = async () => {
    const benDoc = doc(db, 'investmentBenefits', editingBenefit.id);
    await updateDoc(benDoc, editingBenefit);
    const benSnap = await getDocs(collection(db, 'investmentBenefits'));
    setInvestmentBenefits(benSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    setEditingBenefit(null);
    alert('تم التعديل بنجاح');
  };

  const handleAddBenefit = async () => {
    await addDoc(collection(db, 'investmentBenefits'), newBenefit);
    const benSnap = await getDocs(collection(db, 'investmentBenefits'));
    setInvestmentBenefits(benSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    setNewBenefit({
      icon: "faChartLine",
      title: "",
      description: ""
    });
    alert('تمت الإضافة بنجاح');
  };

  const handleDeleteBenefit = async (id) => {
    await deleteDoc(doc(db, 'investmentBenefits', id));
    const benSnap = await getDocs(collection(db, 'investmentBenefits'));
    setInvestmentBenefits(benSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    if (editingBenefit && editingBenefit.id === id) {
      setEditingBenefit(null);
    }
    alert('تم الحذف بنجاح');
  };

  // Handlers for FAQs
  const handleEditFaq = (faq) => {
    setEditingFaq({ ...faq });
    setEditingOpportunity(null);
    setEditingBenefit(null);
  };

  const handleUpdateFaq = async () => {
    const faqDoc = doc(db, 'investmentFaqs', editingFaq.id);
    await updateDoc(faqDoc, editingFaq);
    const faqSnap = await getDocs(collection(db, 'investmentFaqs'));
    setFaqs(faqSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    setEditingFaq(null);
    alert('تم التعديل بنجاح');
  };

  const handleAddFaq = async () => {
    await addDoc(collection(db, 'investmentFaqs'), newFaq);
    const faqSnap = await getDocs(collection(db, 'investmentFaqs'));
    setFaqs(faqSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    setNewFaq({
      question: "",
      answer: ""
    });
    alert('تمت الإضافة بنجاح');
  };

  const handleDeleteFaq = async (id) => {
    await deleteDoc(doc(db, 'investmentFaqs', id));
    const faqSnap = await getDocs(collection(db, 'investmentFaqs'));
    setFaqs(faqSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    if (editingFaq && editingFaq.id === id) {
      setEditingFaq(null);
    }
    alert('تم الحذف بنجاح');
  };

  return (
    <div className={styles.editorWrapper}>
      <h2 className={styles.sectionTitle}>إدارة صفحة الاستثمار</h2>

      {/* Investment Opportunities Section */}
      <div className={styles.editorSection}>
        <h3>فرص الاستثمار</h3>

        {/* List of existing opportunities */}
        <div className={styles.tableContainer}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>العنوان</th>
                <th>الحد الأدنى للاستثمار</th>
                <th>العائد المتوقع</th>
                <th>المدة</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {investmentOpportunities.map(opportunity => (
                <tr key={opportunity.id}>
                  <td>{opportunity.title}</td>
                  <td>{opportunity.minInvestment}</td>
                  <td>{opportunity.expectedReturn}</td>
                  <td>{opportunity.period}</td>
                  <td>
                    <button
                      className={styles.editButton}
                      onClick={() => handleEditOpportunity(opportunity)}
                    >
                      تعديل
                    </button>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDeleteOpportunity(opportunity.id)}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit opportunity form */}
        {editingOpportunity && (
          <div className={styles.editForm}>
            <h4>تعديل فرصة استثمارية</h4>
            <div className={styles.formGroup}>
              <label>العنوان</label>
              <input
                type="text"
                value={editingOpportunity.title}
                onChange={(e) => setEditingOpportunity({ ...editingOpportunity, title: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الأيقونة</label>
              <select
                value={editingOpportunity.icon}
                onChange={(e) => setEditingOpportunity({ ...editingOpportunity, icon: e.target.value })}
              >
                {iconOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>الوصف</label>
              <textarea
                value={editingOpportunity.description}
                onChange={(e) => setEditingOpportunity({ ...editingOpportunity, description: e.target.value })}
                rows="3"
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <label>الحد الأدنى للاستثمار</label>
              <input
                type="text"
                value={editingOpportunity.minInvestment}
                onChange={(e) => setEditingOpportunity({ ...editingOpportunity, minInvestment: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label>العائد المتوقع</label>
              <input
                type="text"
                value={editingOpportunity.expectedReturn}
                onChange={(e) => setEditingOpportunity({ ...editingOpportunity, expectedReturn: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label>المدة</label>
              <input
                type="text"
                value={editingOpportunity.period}
                onChange={(e) => setEditingOpportunity({ ...editingOpportunity, period: e.target.value })}
              />
            </div>
            <div className={styles.formActions}>
              <button
                className={styles.saveButton}
                onClick={handleUpdateOpportunity}
              >
                حفظ التغييرات
              </button>
              <button
                className={styles.cancelButton}
                onClick={() => setEditingOpportunity(null)}
              >
                إلغاء
              </button>
            </div>
          </div>
        )}

        {/* Add new opportunity form */}
        {!editingOpportunity && (
          <div className={styles.editForm}>
            <h4>إضافة فرصة استثمارية جديدة</h4>
            <div className={styles.formGroup}>
              <label>العنوان</label>
              <input
                type="text"
                value={newOpportunity.title}
                onChange={(e) => setNewOpportunity({ ...newOpportunity, title: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الأيقونة</label>
              <select
                value={newOpportunity.icon}
                onChange={(e) => setNewOpportunity({ ...newOpportunity, icon: e.target.value })}
              >
                {iconOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>الوصف</label>
              <textarea
                value={newOpportunity.description}
                onChange={(e) => setNewOpportunity({ ...newOpportunity, description: e.target.value })}
                rows="3"
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <label>الحد الأدنى للاستثمار</label>
              <input
                type="text"
                value={newOpportunity.minInvestment}
                onChange={(e) => setNewOpportunity({ ...newOpportunity, minInvestment: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label>العائد المتوقع</label>
              <input
                type="text"
                value={newOpportunity.expectedReturn}
                onChange={(e) => setNewOpportunity({ ...newOpportunity, expectedReturn: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label>المدة</label>
              <input
                type="text"
                value={newOpportunity.period}
                onChange={(e) => setNewOpportunity({ ...newOpportunity, period: e.target.value })}
              />
            </div>
            <div className={styles.formActions}>
              <button
                className={styles.addButton}
                onClick={handleAddOpportunity}
              >
                إضافة الفرصة
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Investment Benefits Section */}
      <div className={styles.editorSection}>
        <h3>مميزات الاستثمار</h3>

        {/* List of existing benefits */}
        <div className={styles.tableContainer}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>العنوان</th>
                <th>الوصف</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {investmentBenefits.map(benefit => (
                <tr key={benefit.id}>
                  <td>{benefit.title}</td>
                  <td>{benefit.description}</td>
                  <td>
                    <button
                      className={styles.editButton}
                      onClick={() => handleEditBenefit(benefit)}
                    >
                      تعديل
                    </button>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDeleteBenefit(benefit.id)}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit benefit form */}
        {editingBenefit && (
          <div className={styles.editForm}>
            <h4>تعديل ميزة استثمارية</h4>
            <div className={styles.formGroup}>
              <label>العنوان</label>
              <input
                type="text"
                value={editingBenefit.title}
                onChange={(e) => setEditingBenefit({ ...editingBenefit, title: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الأيقونة</label>
              <select
                value={editingBenefit.icon}
                onChange={(e) => setEditingBenefit({ ...editingBenefit, icon: e.target.value })}
              >
                {iconOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>الوصف</label>
              <input
                type="text"
                value={editingBenefit.description}
                onChange={(e) => setEditingBenefit({ ...editingBenefit, description: e.target.value })}
              />
            </div>
            <div className={styles.formActions}>
              <button
                className={styles.saveButton}
                onClick={handleUpdateBenefit}
              >
                حفظ التغييرات
              </button>
              <button
                className={styles.cancelButton}
                onClick={() => setEditingBenefit(null)}
              >
                إلغاء
              </button>
            </div>
          </div>
        )}

        {/* Add new benefit form */}
        {!editingBenefit && (
          <div className={styles.editForm}>
            <h4>إضافة ميزة استثمارية جديدة</h4>
            <div className={styles.formGroup}>
              <label>العنوان</label>
              <input
                type="text"
                value={newBenefit.title}
                onChange={(e) => setNewBenefit({ ...newBenefit, title: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الأيقونة</label>
              <select
                value={newBenefit.icon}
                onChange={(e) => setNewBenefit({ ...newBenefit, icon: e.target.value })}
              >
                {iconOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>الوصف</label>
              <input
                type="text"
                value={newBenefit.description}
                onChange={(e) => setNewBenefit({ ...newBenefit, description: e.target.value })}
              />
            </div>
            <div className={styles.formActions}>
              <button
                className={styles.addButton}
                onClick={handleAddBenefit}
              >
                إضافة الميزة
              </button>
            </div>
          </div>
        )}
      </div>

      {/* FAQs Section */}
      <div className={styles.editorSection}>
        <h3>الأسئلة الشائعة</h3>

        {/* List of existing FAQs */}
        <div className={styles.tableContainer}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>السؤال</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {faqs.map(faq => (
                <tr key={faq.id}>
                  <td>{faq.question}</td>
                  <td>
                    <button
                      className={styles.editButton}
                      onClick={() => handleEditFaq(faq)}
                    >
                      تعديل
                    </button>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDeleteFaq(faq.id)}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit FAQ form */}
        {editingFaq && (
          <div className={styles.editForm}>
            <h4>تعديل سؤال شائع</h4>
            <div className={styles.formGroup}>
              <label>السؤال</label>
              <input
                type="text"
                value={editingFaq.question}
                onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الإجابة</label>
              <textarea
                value={editingFaq.answer}
                onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })}
                rows="4"
              ></textarea>
            </div>
            <div className={styles.formActions}>
              <button
                className={styles.saveButton}
                onClick={handleUpdateFaq}
              >
                حفظ التغييرات
              </button>
              <button
                className={styles.cancelButton}
                onClick={() => setEditingFaq(null)}
              >
                إلغاء
              </button>
            </div>
          </div>
        )}

        {/* Add new FAQ form */}
        {!editingFaq && (
          <div className={styles.editForm}>
            <h4>إضافة سؤال شائع جديد</h4>
            <div className={styles.formGroup}>
              <label>السؤال</label>
              <input
                type="text"
                value={newFaq.question}
                onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الإجابة</label>
              <textarea
                value={newFaq.answer}
                onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                rows="4"
              ></textarea>
            </div>
            <div className={styles.formActions}>
              <button
                className={styles.addButton}
                onClick={handleAddFaq}
              >
                إضافة السؤال
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}