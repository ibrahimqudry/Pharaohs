import { useState } from 'react';
import styles from './EditorStyles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

export default function InvestmentEditor() {
  const [investmentOpportunities, setInvestmentOpportunities] = useState([
    {
      id: 1,
      title: "الاستثمار في الوحدات السكنية",
      icon: "faBuilding",
      description: "فرصة للاستثمار في شقق وفلل سكنية فاخرة في مواقع استراتيجية بأسوان الجديدة، مع عائد استثماري يصل إلى 15% سنوياً.",
      minInvestment: "1,500,000 جنيه",
      expectedReturn: "12-15% سنوياً",
      period: "3-5 سنوات"
    },
    {
      id: 2,
      title: "الاستثمار في المحلات التجارية",
      icon: "faMoneyBillWave",
      description: "استثمر في المحلات والمساحات التجارية في مشاريعنا المميزة، واستفد من الموقع الاستراتيجي والإقبال المتزايد.",
      minInvestment: "2,000,000 جنيه",
      expectedReturn: "15-18% سنوياً",
      period: "3-7 سنوات"
    },
    {
      id: 3,
      title: "الاستثمار في الأراضي",
      icon: "faMapMarkedAlt",
      description: "فرصة للاستثمار في قطع أراضي استراتيجية في أسوان الجديدة، مع توقعات بارتفاع قيمتها بنسبة تصل إلى 40% خلال السنوات القادمة.",
      minInvestment: "800,000 جنيه",
      expectedReturn: "20-25% سنوياً",
      period: "5-10 سنوات"
    },
    {
      id: 4,
      title: "الشراكة في المشاريع",
      icon: "faHandshake",
      description: "فرصة للدخول كشريك في مشاريعنا العقارية المتميزة، مع ضمان الشفافية الكاملة والمتابعة المستمرة لسير العمل.",
      minInvestment: "5,000,000 جنيه",
      expectedReturn: "25-30% على المشروع",
      period: "حسب المشروع"
    }
  ]);

  const [investmentBenefits, setInvestmentBenefits] = useState([
    {
      id: 1,
      icon: "faChartLine",
      title: "عوائد استثمارية مرتفعة",
      description: "عوائد تصل إلى 30% على المشاريع الاستثمارية"
    },
    {
      id: 2,
      icon: "faShieldAlt",
      title: "استثمار آمن ومضمون",
      description: "ضمانات قانونية وعقارية تحمي استثمارك"
    },
    {
      id: 3,
      icon: "faCertificate",
      title: "خبرة 20 عام",
      description: "فريق متخصص بخبرة طويلة في السوق العقاري"
    },
    {
      id: 4,
      icon: "faPercentage",
      title: "خطط سداد مرنة",
      description: "أنظمة سداد متنوعة تناسب جميع المستثمرين"
    }
  ]);

  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "ما هو الحد الأدنى للاستثمار في مشاريع الفراعنة؟",
      answer: "يختلف الحد الأدنى للاستثمار حسب نوع الفرصة الاستثمارية، حيث يبدأ من 800,000 جنيه للاستثمار في الأراضي، و1,500,000 جنيه للوحدات السكنية، و2,000,000 جنيه للمحلات التجارية."
    },
    {
      id: 2,
      question: "ما هي مدة الاستثمار المتوقعة؟",
      answer: "تتراوح مدة الاستثمار بين 3-10 سنوات حسب نوع الاستثمار، مع إمكانية التخارج المبكر وفقاً لشروط محددة في العقد."
    },
    {
      id: 3,
      question: "هل هناك ضمانات للاستثمار؟",
      answer: "نعم، نقدم ضمانات قانونية وعقارية كاملة لحماية استثمارك، بالإضافة إلى عقود موثقة وصكوك ملكية واضحة."
    },
    {
      id: 4,
      question: "كيف يتم توزيع العوائد الاستثمارية؟",
      answer: "يتم توزيع العوائد الاستثمارية بشكل دوري (سنوي أو نصف سنوي) حسب نوع الاستثمار والاتفاق المبرم، مع تقارير دورية عن أداء الاستثمار."
    },
    {
      id: 5,
      question: "هل يمكنني زيارة المشاريع قبل الاستثمار؟",
      answer: "بالتأكيد، نرحب بزيارتكم لمشاريعنا في أي وقت، ويمكننا ترتيب جولات ميدانية مع مستشارينا العقاريين لشرح تفاصيل المشاريع والفرص الاستثمارية المتاحة."
    }
  ]);

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
    { value: "faChartLine", label: "رسم بياني" },
    { value: "faHandshake", label: "مصافحة" },
    { value: "faBuilding", label: "مبنى" },
    { value: "faMapMarkedAlt", label: "خريطة" },
    { value: "faMoneyBillWave", label: "نقود" },
    { value: "faShieldAlt", label: "درع" },
    { value: "faCertificate", label: "شهادة" },
    { value: "faPercentage", label: "نسبة مئوية" },
    { value: "faQuestionCircle", label: "علامة استفهام" }
  ];

  // Helper function to get icon component
  const getIconComponent = (iconName) => {
    switch(iconName) {
      case "faChartLine": return faChartLine;
      case "faHandshake": return faHandshake;
      case "faBuilding": return faBuilding;
      case "faMapMarkedAlt": return faMapMarkedAlt;
      case "faMoneyBillWave": return faMoneyBillWave;
      case "faShieldAlt": return faShieldAlt;
      case "faCertificate": return faCertificate;
      case "faPercentage": return faPercentage;
      case "faQuestionCircle": return faQuestionCircle;
      default: return faBuilding;
    }
  };

  // Handlers for investment opportunities
  const handleEditOpportunity = (opportunity) => {
    setEditingOpportunity({...opportunity});
    setEditingBenefit(null);
    setEditingFaq(null);
  };

  const handleUpdateOpportunity = () => {
    setInvestmentOpportunities(investmentOpportunities.map(opportunity => 
      opportunity.id === editingOpportunity.id ? editingOpportunity : opportunity
    ));
    setEditingOpportunity(null);
  };

  const handleAddOpportunity = () => {
    const newOpportunityWithId = {
      ...newOpportunity,
      id: investmentOpportunities.length > 0 ? Math.max(...investmentOpportunities.map(opportunity => opportunity.id)) + 1 : 1
    };
    setInvestmentOpportunities([...investmentOpportunities, newOpportunityWithId]);
    setNewOpportunity({
      title: "",
      icon: "faBuilding",
      description: "",
      minInvestment: "",
      expectedReturn: "",
      period: ""
    });
  };

  const handleDeleteOpportunity = (id) => {
    setInvestmentOpportunities(investmentOpportunities.filter(opportunity => opportunity.id !== id));
    if (editingOpportunity && editingOpportunity.id === id) {
      setEditingOpportunity(null);
    }
  };

  // Handlers for investment benefits
  const handleEditBenefit = (benefit) => {
    setEditingBenefit({...benefit});
    setEditingOpportunity(null);
    setEditingFaq(null);
  };

  const handleUpdateBenefit = () => {
    setInvestmentBenefits(investmentBenefits.map(benefit => 
      benefit.id === editingBenefit.id ? editingBenefit : benefit
    ));
    setEditingBenefit(null);
  };

  const handleAddBenefit = () => {
    const newBenefitWithId = {
      ...newBenefit,
      id: investmentBenefits.length > 0 ? Math.max(...investmentBenefits.map(benefit => benefit.id)) + 1 : 1
    };
    setInvestmentBenefits([...investmentBenefits, newBenefitWithId]);
    setNewBenefit({
      icon: "faChartLine",
      title: "",
      description: ""
    });
  };

  const handleDeleteBenefit = (id) => {
    setInvestmentBenefits(investmentBenefits.filter(benefit => benefit.id !== id));
    if (editingBenefit && editingBenefit.id === id) {
      setEditingBenefit(null);
    }
  };

  // Handlers for FAQs
  const handleEditFaq = (faq) => {
    setEditingFaq({...faq});
    setEditingOpportunity(null);
    setEditingBenefit(null);
  };

  const handleUpdateFaq = () => {
    setFaqs(faqs.map(faq => 
      faq.id === editingFaq.id ? editingFaq : faq
    ));
    setEditingFaq(null);
  };

  const handleAddFaq = () => {
    const newFaqWithId = {
      ...newFaq,
      id: faqs.length > 0 ? Math.max(...faqs.map(faq => faq.id)) + 1 : 1
    };
    setFaqs([...faqs, newFaqWithId]);
    setNewFaq({
      question: "",
      answer: ""
    });
  };

  const handleDeleteFaq = (id) => {
    setFaqs(faqs.filter(faq => faq.id !== id));
    if (editingFaq && editingFaq.id === id) {
      setEditingFaq(null);
    }
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
                onChange={(e) => setEditingOpportunity({...editingOpportunity, title: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الأيقونة</label>
              <select
                value={editingOpportunity.icon}
                onChange={(e) => setEditingOpportunity({...editingOpportunity, icon: e.target.value})}
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
                onChange={(e) => setEditingOpportunity({...editingOpportunity, description: e.target.value})}
                rows="3"
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <label>الحد الأدنى للاستثمار</label>
              <input 
                type="text" 
                value={editingOpportunity.minInvestment}
                onChange={(e) => setEditingOpportunity({...editingOpportunity, minInvestment: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>العائد المتوقع</label>
              <input 
                type="text" 
                value={editingOpportunity.expectedReturn}
                onChange={(e) => setEditingOpportunity({...editingOpportunity, expectedReturn: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>المدة</label>
              <input 
                type="text" 
                value={editingOpportunity.period}
                onChange={(e) => setEditingOpportunity({...editingOpportunity, period: e.target.value})}
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
                onChange={(e) => setNewOpportunity({...newOpportunity, title: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الأيقونة</label>
              <select
                value={newOpportunity.icon}
                onChange={(e) => setNewOpportunity({...newOpportunity, icon: e.target.value})}
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
                onChange={(e) => setNewOpportunity({...newOpportunity, description: e.target.value})}
                rows="3"
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <label>الحد الأدنى للاستثمار</label>
              <input 
                type="text" 
                value={newOpportunity.minInvestment}
                onChange={(e) => setNewOpportunity({...newOpportunity, minInvestment: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>العائد المتوقع</label>
              <input 
                type="text" 
                value={newOpportunity.expectedReturn}
                onChange={(e) => setNewOpportunity({...newOpportunity, expectedReturn: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>المدة</label>
              <input 
                type="text" 
                value={newOpportunity.period}
                onChange={(e) => setNewOpportunity({...newOpportunity, period: e.target.value})}
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
                onChange={(e) => setEditingBenefit({...editingBenefit, title: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الأيقونة</label>
              <select
                value={editingBenefit.icon}
                onChange={(e) => setEditingBenefit({...editingBenefit, icon: e.target.value})}
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
                onChange={(e) => setEditingBenefit({...editingBenefit, description: e.target.value})}
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
                onChange={(e) => setNewBenefit({...newBenefit, title: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الأيقونة</label>
              <select
                value={newBenefit.icon}
                onChange={(e) => setNewBenefit({...newBenefit, icon: e.target.value})}
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
                onChange={(e) => setNewBenefit({...newBenefit, description: e.target.value})}
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
                onChange={(e) => setEditingFaq({...editingFaq, question: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الإجابة</label>
              <textarea 
                value={editingFaq.answer}
                onChange={(e) => setEditingFaq({...editingFaq, answer: e.target.value})}
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
                onChange={(e) => setNewFaq({...newFaq, question: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label>الإجابة</label>
              <textarea 
                value={newFaq.answer}
                onChange={(e) => setNewFaq({...newFaq, answer: e.target.value})}
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