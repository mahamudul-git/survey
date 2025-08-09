import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import { MapContainer, TileLayer, Circle as MapCircle, Marker, useMapEvents } from 'react-leaflet';
import Select from 'react-select';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

import { 
  Plus, 
  Trash2, 
  Save,
  Eye,
  ArrowLeft,
  Type,
  List,
  CheckSquare,
  Circle,
  Star,
  Calendar,
  Hash,
  FileText,
  Palette,
  Layout,
  Shuffle,
  BarChart3,
  Move,
  GripVertical,
  Settings,
  Layers,
  ChevronDown,
  ChevronUp,
  ToggleLeft,
  ToggleRight,
  Zap,
  X,
  Image,
  Grid3X3,
  Phone,
  Mail,
  Target,
  Clock,
  Users,
  MapPin,
  Tag,
  Globe,
  DollarSign,
  Briefcase,
  Heart,
  BookOpen,
  Car,
  Search,
  Home,
  Smartphone,
  Monitor,
  Gamepad2,
  Music,
  Camera,
  Dumbbell,
  Coffee,
  ShoppingBag
} from "lucide-react";

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const questionTypes = [
  { id: 'text', name: 'Text', icon: Type, description: 'Short text input' },
  { id: 'textarea', name: 'Long Text', icon: FileText, description: 'Multi-line text area' },
  { id: 'multiple-choice', name: 'Multiple Choice', icon: Circle, description: 'Single selection from options' },
  { id: 'checkbox', name: 'Checkbox', icon: CheckSquare, description: 'Multiple selections allowed' },
  { id: 'dropdown', name: 'Dropdown', icon: List, description: 'Select from dropdown list' },
  { id: 'rating', name: 'Rating', icon: Star, description: 'Star or numeric rating' },
  { id: 'date', name: 'Date', icon: Calendar, description: 'Date picker' },
  { id: 'number', name: 'Number', icon: Hash, description: 'Numeric input only' },
  { id: 'image-choice', name: 'Image Choice', icon: Image, description: 'Visual multiple choice' },
  { id: 'matrix', name: 'Matrix/Grid', icon: Grid3X3, description: 'Rating grid questions' },
];

// Targeting options similar to Facebook Ads
const targetingOptions = {
  interests: [
    { value: 'technology', label: 'Technology', icon: Smartphone },
    { value: 'fashion', label: 'Fashion & Style', icon: ShoppingBag },
    { value: 'fitness', label: 'Fitness & Health', icon: Dumbbell },
    { value: 'food', label: 'Food & Dining', icon: Coffee },
    { value: 'travel', label: 'Travel', icon: Globe },
    { value: 'music', label: 'Music', icon: Music },
    { value: 'gaming', label: 'Gaming', icon: Gamepad2 },
    { value: 'photography', label: 'Photography', icon: Camera },
    { value: 'business', label: 'Business', icon: Briefcase },
    { value: 'education', label: 'Education', icon: BookOpen },
    { value: 'automotive', label: 'Automotive', icon: Car },
    { value: 'home', label: 'Home & Garden', icon: Home },
    { value: 'entertainment', label: 'Entertainment', icon: Monitor },
    { value: 'relationships', label: 'Relationships', icon: Heart }
  ],
  
  education: [
    { value: 'high_school', label: 'High School' },
    { value: 'some_college', label: 'Some College' },
    { value: 'bachelor', label: "Bachelor's Degree" },
    { value: 'master', label: "Master's Degree" },
    { value: 'doctorate', label: 'Doctorate' },
    { value: 'professional', label: 'Professional Degree' }
  ],
  
  income: [
    { value: 'under_25k', label: 'Under $25,000' },
    { value: '25k_50k', label: '$25,000 - $50,000' },
    { value: '50k_75k', label: '$50,000 - $75,000' },
    { value: '75k_100k', label: '$75,000 - $100,000' },
    { value: '100k_150k', label: '$100,000 - $150,000' },
    { value: 'over_150k', label: 'Over $150,000' }
  ],
  
  relationship: [
    { value: 'single', label: 'Single' },
    { value: 'in_relationship', label: 'In a Relationship' },
    { value: 'married', label: 'Married' },
    { value: 'divorced', label: 'Divorced' },
    { value: 'widowed', label: 'Widowed' }
  ],
  
  parenting: [
    { value: 'no_children', label: 'No Children' },
    { value: 'expecting', label: 'Expecting' },
    { value: 'infant', label: 'Infant (0-1 years)' },
    { value: 'toddler', label: 'Toddler (1-3 years)' },
    { value: 'preschool', label: 'Preschool (3-6 years)' },
    { value: 'school_age', label: 'School Age (6-18 years)' },
    { value: 'adult_children', label: 'Adult Children' }
  ],
  
  industries: [
    { value: 'technology', label: 'Technology' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Finance' },
    { value: 'education', label: 'Education' },
    { value: 'retail', label: 'Retail' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'construction', label: 'Construction' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'government', label: 'Government' },
    { value: 'nonprofit', label: 'Non-profit' }
  ],
  
  deviceUsage: [
    { value: 'smartphone_heavy', label: 'Heavy Smartphone Users' },
    { value: 'tablet_users', label: 'Tablet Users' },
    { value: 'desktop_users', label: 'Desktop Users' },
    { value: 'smart_tv', label: 'Smart TV Users' },
    { value: 'wearables', label: 'Wearable Device Users' }
  ],
  
  onlineActivity: [
    { value: 'social_media_active', label: 'Active on Social Media' },
    { value: 'online_shoppers', label: 'Online Shoppers' },
    { value: 'video_streamers', label: 'Video Streaming' },
    { value: 'news_readers', label: 'Online News Readers' },
    { value: 'blog_readers', label: 'Blog Readers' }
  ]
};

// Map component for location targeting
const LocationTargetingMap = ({ center, radius, onLocationChange }) => {
  const mapRef = React.useRef(null);

  const MapEvents = () => {
    useMapEvents({
      click: (e) => {
        onLocationChange({ lat: e.latlng.lat, lng: e.latlng.lng });
      }
    });
    return null;
  };

  // Update map view when center changes
  React.useEffect(() => {
    if (mapRef.current && center && center.lat && center.lng) {
      const map = mapRef.current;
      map.setView([center.lat, center.lng], 12, {
        animate: true,
        duration: 1.0 // Smooth animation
      });
    }
  }, [center]);

  return (
    <div className="h-64 rounded-lg overflow-hidden border border-[#9767E4]/20">
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={10}
        ref={mapRef}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[center.lat, center.lng]} />
        <MapCircle
          center={[center.lat, center.lng]}
          radius={radius * 1000} // Convert km to meters
          pathOptions={{
            fillColor: '#9767E4',
            fillOpacity: 0.2,
            color: '#9767E4',
            weight: 2
          }}
        />
        <MapEvents />
      </MapContainer>
    </div>
  );
};

// Question Type Preview Component
const QuestionTypePreview = ({ questionType }) => {
  const renderPreview = () => {
    switch (questionType) {
      case 'text':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">What is your name?</label>
            <input 
              type="text" 
              placeholder="Enter your answer here..." 
              className="w-full p-2 border border-gray-300 rounded bg-white text-gray-900"
              disabled
            />
          </div>
        );
      
      case 'textarea':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">Please describe your experience</label>
            <textarea 
              placeholder="Enter your detailed response here..." 
              className="w-full p-2 border border-gray-300 rounded bg-white text-gray-900 h-20"
              disabled
            />
          </div>
        );
      
      case 'multiple-choice':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">What is your favorite color?</label>
            <div className="space-y-1">
              {['Red', 'Blue', 'Green', 'Yellow'].map((option, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="radio" name="preview" className="text-purple-500" disabled />
                  <span className="text-white text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>
        );
      
      case 'checkbox':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">Select all that apply</label>
            <div className="space-y-1">
              {['Option A', 'Option B', 'Option C'].map((option, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="checkbox" className="text-purple-500" disabled />
                  <span className="text-white text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>
        );
      
      case 'dropdown':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">Choose your country</label>
            <select className="w-full p-2 border border-gray-300 rounded bg-white text-gray-900" disabled>
              <option>Select an option</option>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </select>
          </div>
        );
      
      case 'rating':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">Rate your experience</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        );
      
      case 'date':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">Select your birth date</label>
            <input 
              type="date" 
              className="w-full p-2 border border-gray-300 rounded bg-white text-gray-900"
              disabled
            />
          </div>
        );
      
      case 'number':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">Enter your age</label>
            <input 
              type="number" 
              placeholder="25" 
              className="w-full p-2 border border-gray-300 rounded bg-white text-gray-900"
              disabled
            />
          </div>
        );
      
      case 'image-choice':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">Choose your favorite design</label>
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((img) => (
                <div key={img} className="relative">
                  <div className="w-16 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded border-2 border-transparent hover:border-purple-500 cursor-pointer flex items-center justify-center">
                    <Image className="w-6 h-6 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'matrix':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">Rate each feature</label>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left text-white"></th>
                    <th className="text-center text-white text-xs">Poor</th>
                    <th className="text-center text-white text-xs">Good</th>
                    <th className="text-center text-white text-xs">Excellent</th>
                  </tr>
                </thead>
                <tbody className="space-y-1">
                  {['Quality', 'Service'].map((row, index) => (
                    <tr key={index}>
                      <td className="text-white text-xs py-1">{row}</td>
                      <td className="text-center"><input type="radio" name={`preview-${index}`} disabled /></td>
                      <td className="text-center"><input type="radio" name={`preview-${index}`} disabled /></td>
                      <td className="text-center"><input type="radio" name={`preview-${index}`} disabled /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      default:
        return <div className="text-white text-sm">Preview not available</div>;
    }
  };

  return (
    <div className="bg-gray-800/95 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4 shadow-xl max-w-xs">
      <div className="text-xs text-purple-300 mb-2 font-medium">Preview:</div>
      {renderPreview()}
    </div>
  );
};

export default function CreateScratch() {
  const [survey, setSurvey] = useState({
    title: '',
    description: '',
    pages: [
      {
        id: Date.now(),
        title: 'Page 1',
        questions: []
      }
    ],
    theme: {
      layout: 'default',
      progressBar: true,
      pageRandomization: false,
      questionRandomization: false
    },
    publishing: {
      responseLimit: null,
      startDate: '',
      endDate: '',
      tags: [],
      targetAudience: {
        demographics: {
          ageRange: { min: 18, max: 65 },
          gender: 'all',
          education: [],
          income: [],
          relationship: [],
          parenting: []
        },
        location: {
          center: { lat: 40.7128, lng: -74.0060 }, // Default to NYC
          radius: 10 // in km
        },
        interests: [],
        behaviors: {
          deviceUsage: [],
          onlineActivity: [],
          purchaseBehavior: [],
          travelBehavior: []
        },
        profession: {
          industries: [],
          jobTitles: [],
          companySize: [],
          workExperience: []
        },
        customAudiences: {
          lookalike: false,
          customTags: []
        }
      }
    }
  });
  
  const [currentView, setCurrentView] = useState('builder'); // 'builder' or 'settings'
  const [currentPageId, setCurrentPageId] = useState(survey.pages[0]?.id);
  const [showQuestionTypeDropdown, setShowQuestionTypeDropdown] = useState(false);
  const [showAddQuestionDropdown, setShowAddQuestionDropdown] = useState(false);
  const [showLogicModal, setShowLogicModal] = useState(false);
  const [currentLogicQuestion, setCurrentLogicQuestion] = useState(null);
  const [showLogicExamples, setShowLogicExamples] = useState(false);
  const [showValidationModal, setShowValidationModal] = useState(false);
  const [currentValidationQuestion, setCurrentValidationQuestion] = useState(null);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [isSearchingLocation, setIsSearchingLocation] = useState(false);
  const [publishModalTab, setPublishModalTab] = useState('basic'); // 'basic', 'location', 'interests'
  const [hoveredQuestionType, setHoveredQuestionType] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const dropdownRef = useRef(null);
  const addQuestionDropdownRef = useRef(null);

  // Helper function to check if question type needs validation settings
  const needsValidationSettings = (questionType) => {
    const validationTypes = ['text', 'textarea', 'number', 'email'];
    return validationTypes.includes(questionType);
  };

  // Handle image upload for image-choice options
  const handleImageUpload = (questionId, optionIndex, file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSurvey(prev => ({
          ...prev,
          pages: prev.pages.map(page => ({
            ...page,
            questions: page.questions.map(q => {
              if (q.id === questionId) {
                const newImages = q.images || {};
                newImages[optionIndex] = e.target.result;
                return { ...q, images: newImages };
              }
              return q;
            })
          }))
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove image from image-choice option
  const removeImage = (questionId, optionIndex) => {
    setSurvey(prev => ({
      ...prev,
      pages: prev.pages.map(page => ({
        ...page,
        questions: page.questions.map(q => {
          if (q.id === questionId) {
            const newImages = { ...q.images };
            delete newImages[optionIndex];
            return { ...q, images: newImages };
          }
          return q;
        })
      }))
    }));
  };

  // Handlers for publishing options
  const handleTagAdd = (newTag) => {
    if (newTag && !survey.publishing.tags.includes(newTag)) {
      setSurvey(prev => ({
        ...prev,
        publishing: {
          ...prev.publishing,
          tags: [...prev.publishing.tags, newTag]
        }
      }));
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setSurvey(prev => ({
      ...prev,
      publishing: {
        ...prev.publishing,
        tags: prev.publishing.tags.filter(tag => tag !== tagToRemove)
      }
    }));
  };

  const handleLocationChange = (newLocation) => {
    setSurvey(prev => ({
      ...prev,
      publishing: {
        ...prev.publishing,
        targetAudience: {
          ...prev.publishing.targetAudience,
          location: {
            ...prev.publishing.targetAudience.location,
            center: newLocation
          }
        }
      }
    }));
  };

  const handleRadiusChange = (newRadius) => {
    setSurvey(prev => ({
      ...prev,
      publishing: {
        ...prev.publishing,
        targetAudience: {
          ...prev.publishing.targetAudience,
          location: {
            ...prev.publishing.targetAudience.location,
            radius: newRadius
          }
        }
      }
    }));
  };

  // Handle location search
  const handleLocationSearch = async (searchTerm) => {
    if (!searchTerm.trim()) return;
    
    setIsSearchingLocation(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchTerm)}&limit=1`
      );
      const data = await response.json();
      
      if (data && data.length > 0) {
        const location = data[0];
        const newLocation = {
          lat: parseFloat(location.lat),
          lng: parseFloat(location.lon)
        };
        handleLocationChange(newLocation);
      }
    } catch (error) {
      console.error('Error searching location:', error);
    } finally {
      setIsSearchingLocation(false);
    }
  };



  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowQuestionTypeDropdown(false);
      }
      if (addQuestionDropdownRef.current && !addQuestionDropdownRef.current.contains(event.target)) {
        setShowAddQuestionDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get current page
  const getCurrentPage = () => {
    return survey.pages.find(page => page.id === currentPageId) || survey.pages[0];
  };

  // Add new page
  const addPage = () => {
    const newPage = {
      id: Date.now(),
      title: `Page ${survey.pages.length + 1}`,
      questions: []
    };
    
    setSurvey(prev => ({
      ...prev,
      pages: [...prev.pages, newPage]
    }));
    setCurrentPageId(newPage.id);
  };

  // Delete page
  const deletePage = (pageId) => {
    if (survey.pages.length <= 1) return; // Don't delete last page
    
    setSurvey(prev => ({
      ...prev,
      pages: prev.pages.filter(page => page.id !== pageId)
    }));
    
    if (currentPageId === pageId) {
      setCurrentPageId(survey.pages[0].id);
    }
  };

  // Add question to page
  const addQuestion = (pageId, questionType) => {
    const newQuestion = {
      id: Date.now(),
      type: questionType,
      title: '',
      required: true, // Default to required
      options: questionType === 'multiple-choice' || questionType === 'checkbox' || questionType === 'dropdown' || questionType === 'image-choice' ? ['Option 1', 'Option 2'] : [],
      logic: {
        enabled: false,
        conditions: []
      },
      validation: {
        enabled: false,
        minLength: null,
        maxLength: null,
        minValue: null,
        maxValue: null,
        phoneWithCountryCode: false,
        emailValidation: false,
        matrixRows: questionType === 'matrix' ? ['Row 1', 'Row 2'] : [],
        matrixColumns: questionType === 'matrix' ? ['Column 1', 'Column 2', 'Column 3'] : []
      }
    };
    
    setSurvey(prev => ({
      ...prev,
      pages: prev.pages.map(page => 
        page.id === pageId 
          ? { ...page, questions: [...page.questions, newQuestion] }
          : page
      )
    }));
  };

  // Open logic modal for a question
  const openLogicModal = (question) => {
    // Get the most current question data from the survey state
    const currentQuestion = survey.pages
      .flatMap(page => page.questions)
      .find(q => q.id === question.id);
    
    if (currentQuestion) {
      setCurrentLogicQuestion(currentQuestion);
      setShowLogicModal(true);
    }
  };

  // Save and close logic modal
  const saveLogicModal = () => {
    // Debug: Log the current survey state to see logic data
    console.log('Survey with Logic:', JSON.stringify(survey, null, 2));
    setShowLogicModal(false);
    setCurrentLogicQuestion(null);
    setShowLogicExamples(false); // Reset examples state when modal closes
  };

  // Add logic condition
  const addLogicCondition = (questionId) => {
    const newCondition = {
      id: Date.now(),
      trigger: 'equals', // 'equals', 'not_equals', 'contains', 'greater_than', 'less_than'
      value: '',
      action: {
        type: 'skip',
        target: '1' // number of questions to skip or page to jump to
      }
    };

    setSurvey(prev => ({
      ...prev,
      pages: prev.pages.map(page => ({
        ...page,
        questions: page.questions.map(q => 
          q.id === questionId 
            ? { 
                ...q, 
                logic: {
                  ...q.logic,
                  enabled: true,
                  conditions: [...q.logic.conditions, newCondition]
                }
              }
            : q
        )
      }))
    }));
    
    // Update currentLogicQuestion state if it's the one being edited
    if (currentLogicQuestion && currentLogicQuestion.id === questionId) {
      setCurrentLogicQuestion(prev => ({
        ...prev,
        logic: {
          ...prev.logic,
          enabled: true,
          conditions: [...prev.logic.conditions, newCondition]
        }
      }));
    }
  };

  // Remove logic condition
  const removeLogicCondition = (questionId, conditionId) => {
    setSurvey(prev => ({
      ...prev,
      pages: prev.pages.map(page => ({
        ...page,
        questions: page.questions.map(q => 
          q.id === questionId 
            ? { 
                ...q, 
                logic: {
                  ...q.logic,
                  conditions: q.logic.conditions.filter(c => c.id !== conditionId),
                  enabled: q.logic.conditions.filter(c => c.id !== conditionId).length > 0
                }
              }
            : q
        )
      }))
    }));
    
    // Update currentLogicQuestion state if it's the one being edited
    if (currentLogicQuestion && currentLogicQuestion.id === questionId) {
      setCurrentLogicQuestion(prev => ({
        ...prev,
        logic: {
          ...prev.logic,
          conditions: prev.logic.conditions.filter(c => c.id !== conditionId),
          enabled: prev.logic.conditions.filter(c => c.id !== conditionId).length > 0
        }
      }));
    }
  };

  // Update logic condition
  const updateLogicCondition = (questionId, conditionId, field, value) => {
    setSurvey(prev => ({
      ...prev,
      pages: prev.pages.map(page => ({
        ...page,
        questions: page.questions.map(q => 
          q.id === questionId 
            ? { 
                ...q, 
                logic: {
                  ...q.logic,
                  conditions: q.logic.conditions.map(c => 
                    c.id === conditionId 
                      ? { ...c, [field]: value }
                      : c
                  )
                }
              }
            : q
        )
      }))
    }));
    
    // Update currentLogicQuestion state if it's the one being edited
    if (currentLogicQuestion && currentLogicQuestion.id === questionId) {
      setCurrentLogicQuestion(prev => ({
        ...prev,
        logic: {
          ...prev.logic,
          conditions: prev.logic.conditions.map(c => 
            c.id === conditionId 
              ? { ...c, [field]: value }
              : c
          )
        }
      }));
    }
  };

  // Update logic condition action
  const updateLogicConditionAction = (questionId, conditionId, actionType, actionTarget) => {
    setSurvey(prev => ({
      ...prev,
      pages: prev.pages.map(page => ({
        ...page,
        questions: page.questions.map(q => 
          q.id === questionId 
            ? { 
                ...q, 
                logic: {
                  ...q.logic,
                  conditions: q.logic.conditions.map(c => 
                    c.id === conditionId 
                      ? { 
                          ...c, 
                          action: {
                            type: actionType,
                            target: actionTarget
                          }
                        }
                      : c
                  )
                }
              }
            : q
        )
      }))
    }));
    
    // Update currentLogicQuestion state if it's the one being edited
    if (currentLogicQuestion && currentLogicQuestion.id === questionId) {
      setCurrentLogicQuestion(prev => ({
        ...prev,
        logic: {
          ...prev.logic,
          conditions: prev.logic.conditions.map(c => 
            c.id === conditionId 
              ? { 
                  ...c, 
                  action: {
                    type: actionType,
                    target: actionTarget
                  }
                }
              : c
          )
        }
      }));
    }
  };

  const updateQuestion = (questionId, field, value) => {
    setSurvey(prev => ({
      ...prev,
      pages: prev.pages.map(page => ({
        ...page,
        questions: page.questions.map(q => {
          if (q.id === questionId) {
            let updatedQuestion = { ...q, [field]: value };
            
            // If changing type, update options accordingly
            if (field === 'type') {
              if (value === 'multiple-choice' || value === 'checkbox' || value === 'dropdown') {
                if (!updatedQuestion.options || updatedQuestion.options.length === 0) {
                  updatedQuestion.options = ['Option 1', 'Option 2'];
                }
              } else {
                updatedQuestion.options = [];
              }
            }
            
            return updatedQuestion;
          }
          return q;
        })
      }))
    }));
  };

  const deleteQuestion = (questionId) => {
    setSurvey(prev => ({
      ...prev,
      pages: prev.pages.map(page => ({
        ...page,
        questions: page.questions.filter(q => q.id !== questionId)
      }))
    }));
  };

  const addOption = (questionId) => {
    setSurvey(prev => ({
      ...prev,
      pages: prev.pages.map(page => ({
        ...page,
        questions: page.questions.map(q => 
          q.id === questionId 
            ? { ...q, options: [...q.options, `Option ${q.options.length + 1}`] }
            : q
        )
      }))
    }));
  };

  const updateOption = (questionId, optionIndex, value) => {
    setSurvey(prev => ({
      ...prev,
      pages: prev.pages.map(page => ({
        ...page,
        questions: page.questions.map(q => 
          q.id === questionId 
            ? { 
                ...q, 
                options: q.options.map((opt, idx) => idx === optionIndex ? value : opt)
              }
            : q
        )
      }))
    }));
  };

  const deleteOption = (questionId, optionIndex) => {
    setSurvey(prev => ({
      ...prev,
      pages: prev.pages.map(page => ({
        ...page,
        questions: page.questions.map(q => 
          q.id === questionId 
            ? { ...q, options: q.options.filter((_, idx) => idx !== optionIndex) }
            : q
        )
      }))
    }));
  };

  // Move question up
  const moveQuestionUp = (questionId) => {
    setSurvey(prev => ({
      ...prev,
      pages: prev.pages.map(page => {
        const questionIndex = page.questions.findIndex(q => q.id === questionId);
        if (questionIndex > 0) {
          const newQuestions = [...page.questions];
          [newQuestions[questionIndex], newQuestions[questionIndex - 1]] = 
          [newQuestions[questionIndex - 1], newQuestions[questionIndex]];
          return { ...page, questions: newQuestions };
        }
        return page;
      })
    }));
  };

  // Move question down
  const moveQuestionDown = (questionId) => {
    setSurvey(prev => ({
      ...prev,
      pages: prev.pages.map(page => {
        const questionIndex = page.questions.findIndex(q => q.id === questionId);
        if (questionIndex < page.questions.length - 1) {
          const newQuestions = [...page.questions];
          [newQuestions[questionIndex], newQuestions[questionIndex + 1]] = 
          [newQuestions[questionIndex + 1], newQuestions[questionIndex]];
          return { ...page, questions: newQuestions };
        }
        return page;
      })
    }));
  };

  // Open validation modal for a question
  const openValidationModal = (question) => {
    const currentQuestion = survey.pages
      .flatMap(page => page.questions)
      .find(q => q.id === question.id);
    
    if (currentQuestion) {
      setCurrentValidationQuestion(currentQuestion);
      setShowValidationModal(true);
    }
  };

  // Save and close validation modal
  const saveValidationModal = () => {
    setShowValidationModal(false);
    setCurrentValidationQuestion(null);
  };

  // Update question validation settings
  const updateQuestionValidation = (questionId, validationType, value) => {
    setSurvey(prev => ({
      ...prev,
      pages: prev.pages.map(page => ({
        ...page,
        questions: page.questions.map(q => {
          if (q.id === questionId) {
            return {
              ...q,
              validation: {
                ...q.validation,
                [validationType]: value
              }
            };
          }
          return q;
        })
      }))
    }));

    // Update currentValidationQuestion state
    if (currentValidationQuestion && currentValidationQuestion.id === questionId) {
      setCurrentValidationQuestion(prev => ({
        ...prev,
        validation: {
          ...prev.validation,
          [validationType]: value
        }
      }));
    }
  };

  // Open publish modal
  const openPublishModal = () => {
    setPublishModalTab('basic'); // Reset to basic tab when opening
    setShowPublishModal(true);
  };

  // Save and close publish modal
  const savePublishModal = () => {
    setShowPublishModal(false);
    // Here you would typically save the survey to backend
    console.log('Publishing survey:', survey);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="fixed top-16 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#9767E4]/10 blur-[60px]"></div>
        <div className="fixed bottom-16 right-1/4 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-[#26B2F2]/10 blur-[60px]"></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#C084FC]/5 blur-[40px]"></div>
      </div>

      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 relative pt-32 pb-12">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Link 
                to="/create" 
                className="p-3 rounded-lg border border-[#9767E4]/20 bg-[#0B111E]/30 backdrop-blur-sm hover:bg-[#9767E4]/10 hover:border-[#9767E4]/40 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 text-[#F8FAFC]" />
              </Link>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-[#F8FAFC]">
                  Start from{" "}
                  <span className="bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">
                    Scratch
                  </span>
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                className="border-[#9767E4]/20 text-[#9767E4] hover:bg-[#9767E4]/10 hover:border-[#9767E4]/40 bg-[#0B111E]/30 backdrop-blur-sm"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button 
                onClick={openPublishModal}
                className="bg-gradient-to-r from-[#9767E4] to-[#C084FC] hover:from-[#8B5CF6] hover:to-[#A855F7] text-white shadow-lg"
              >
                <Save className="w-4 h-4 mr-2" />
                Publish
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Theme Settings & Page Builder Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#0B111E]/40 border border-[#9767E4]/15 backdrop-blur-sm rounded-2xl p-6 sticky top-32 space-y-6">
              
              {/* View Toggle */}
              <div className="flex items-center space-x-2 p-1 bg-[#0B111E]/30 rounded-lg">
                <button
                  onClick={() => setCurrentView('builder')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 ${
                    currentView === 'builder'
                      ? 'bg-[#9767E4] text-white shadow-lg'
                      : 'text-[#F8FAFC]/70 hover:text-[#F8FAFC] hover:bg-[#9767E4]/10'
                  }`}
                >
                  <Layout className="w-4 h-4 inline mr-2" />
                  Builder
                </button>
                <button
                  onClick={() => setCurrentView('settings')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 ${
                    currentView === 'settings'
                      ? 'bg-[#9767E4] text-white shadow-lg'
                      : 'text-[#F8FAFC]/70 hover:text-[#F8FAFC] hover:bg-[#9767E4]/10'
                  }`}
                >
                  <Settings className="w-4 h-4 inline mr-2" />
                  Settings
                </button>
              </div>

              {/* Page Builder View */}
              {currentView === 'builder' && (
                <div className="space-y-6">
                  {/* Pages List */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#9767E4] to-[#C084FC] rounded-lg flex items-center justify-center">
                          <Layers className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-[#F8FAFC]">Pages</h3>
                      </div>
                      <button
                        onClick={addPage}
                        className="p-2 rounded-lg bg-[#9767E4]/10 border border-[#9767E4]/20 hover:bg-[#9767E4]/20 hover:border-[#9767E4]/40 transition-all duration-300"
                      >
                        <Plus className="w-4 h-4 text-[#9767E4]" />
                      </button>
                    </div>
                    
                    <div className="space-y-2 h-[389px] max-h-[389px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#9767E4]/30 scrollbar-track-[#0B111E]/20">
                      {survey.pages.map((page, index) => (
                        <div
                          key={page.id}
                          onClick={() => setCurrentPageId(page.id)}
                          className={`group relative p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                            currentPageId === page.id
                              ? 'bg-[#9767E4]/20 border-[#9767E4]/40'
                              : 'bg-[#0B111E]/30 border-[#9767E4]/10 hover:border-[#9767E4]/30 hover:bg-[#0E1525]/40'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-6 h-6 bg-gradient-to-r from-[#26B2F2]/20 to-[#C084FC]/20 rounded flex items-center justify-center">
                                <span className="text-xs font-medium text-[#26B2F2]">{index + 1}</span>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-[#F8FAFC]">{page.title}</p>
                                <p className="text-xs text-[#F8FAFC]/60">{page.questions.length} question{page.questions.length !== 1 ? 's' : ''}</p>
                              </div>
                            </div>
                            {survey.pages.length > 1 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deletePage(page.id);
                                }}
                                className="opacity-0 group-hover:opacity-100 p-1 rounded text-[#F8FAFC]/40 hover:text-red-400 transition-all duration-300"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  
                </div>
              )}

              {/* Settings View */}
              {currentView === 'settings' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#9767E4] to-[#C084FC] rounded-lg flex items-center justify-center">
                      <Palette className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#F8FAFC]">Theme Settings</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Layout Selection */}
                    <div>
                      <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                        <Layout className="w-4 h-4 inline mr-2" />
                        Theme
                      </label>
                      <div className="relative">
                        <select
                          value={survey.theme.layout}
                          onChange={(e) => setSurvey(prev => ({ 
                            ...prev, 
                            theme: { ...prev.theme, layout: e.target.value }
                          }))}
                          className="appearance-none w-full p-3 pr-10 border border-[#9767E4]/30 rounded-lg bg-[#0B111E]/90 backdrop-blur-md text-[#F8FAFC] focus:border-[#9767E4]/60 focus:outline-none focus:ring-1 focus:ring-[#9767E4]/40 cursor-pointer hover:border-[#9767E4]/50 hover:bg-[#0B111E]/95 transition-all duration-300 shadow-lg"
                          style={{
                            backgroundImage: 'none',
                            colorScheme: 'dark'
                          }}
                        >
                          <option value="default" style={{backgroundColor: 'rgba(11, 17, 30, 0.95)', color: '#F8FAFC', padding: '8px 12px'}}>Default</option>
                          <option value="modern" style={{backgroundColor: 'rgba(11, 17, 30, 0.95)', color: '#F8FAFC', padding: '8px 12px'}}>Modern</option>
                          <option value="classic" style={{backgroundColor: 'rgba(11, 17, 30, 0.95)', color: '#F8FAFC', padding: '8px 12px'}}>Classic</option>
                          <option value="minimal" style={{backgroundColor: 'rgba(11, 17, 30, 0.95)', color: '#F8FAFC', padding: '8px 12px'}}>Minimal</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9767E4]/70 pointer-events-none" />
                      </div>
                    </div>

                    {/* Progress Bar Toggle */}
                    <div className="flex items-center justify-between p-4 bg-[#0B111E]/30 rounded-xl border border-[#9767E4]/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#26B2F2]/20 to-[#C084FC]/20 rounded-lg flex items-center justify-center">
                          <BarChart3 className="w-4 h-4 text-[#26B2F2]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#F8FAFC]">Progress Bar</p>
                          <p className="text-xs text-[#F8FAFC]/60">Show completion progress</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSurvey(prev => ({ 
                          ...prev, 
                          theme: { ...prev.theme, progressBar: !prev.theme.progressBar }
                        }))}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                          survey.theme.progressBar ? 'bg-[#9767E4]' : 'bg-[#F8FAFC]/20'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                          survey.theme.progressBar ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>

                    {/* Page Randomization Toggle */}
                    <div className="flex items-center justify-between p-4 bg-[#0B111E]/30 rounded-xl border border-[#9767E4]/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#26B2F2]/20 to-[#C084FC]/20 rounded-lg flex items-center justify-center">
                          <Shuffle className="w-4 h-4 text-[#26B2F2]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#F8FAFC]">Page Randomization</p>
                          <p className="text-xs text-[#F8FAFC]/60">Randomize page order</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSurvey(prev => ({ 
                          ...prev, 
                          theme: { ...prev.theme, pageRandomization: !prev.theme.pageRandomization }
                        }))}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                          survey.theme.pageRandomization ? 'bg-[#9767E4]' : 'bg-[#F8FAFC]/20'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                          survey.theme.pageRandomization ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>

                    {/* Question Randomization Toggle */}
                    <div className="flex items-center justify-between p-4 bg-[#0B111E]/30 rounded-xl border border-[#9767E4]/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#26B2F2]/20 to-[#C084FC]/20 rounded-lg flex items-center justify-center">
                          <Shuffle className="w-4 h-4 text-[#26B2F2]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#F8FAFC]">Question Randomization</p>
                          <p className="text-xs text-[#F8FAFC]/60">Randomize question order</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSurvey(prev => ({ 
                          ...prev, 
                          theme: { ...prev.theme, questionRandomization: !prev.theme.questionRandomization }
                        }))}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                          survey.theme.questionRandomization ? 'bg-[#9767E4]' : 'bg-[#F8FAFC]/20'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                          survey.theme.questionRandomization ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content - Page Builder */}
          <div className="lg:col-span-3">
            {/* Survey Details */}
            <div className="bg-[#0B111E]/50 border border-[#9767E4]/15 backdrop-blur-sm rounded-2xl p-6 lg:p-8 mb-6 lg:mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-[#26B2F2] to-[#C084FC] rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-[#F8FAFC]">Survey Details</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                    Survey Title *
                  </label>
                  <input
                    type="text"
                    value={survey.title}
                    onChange={(e) => setSurvey(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter your survey title..."
                    className="w-full p-4 border border-[#9767E4]/20 rounded-xl bg-[#0B111E]/40 backdrop-blur-sm text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none focus:ring-2 focus:ring-[#9767E4]/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                    Description
                  </label>
                  <textarea
                    value={survey.description}
                    onChange={(e) => setSurvey(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe what your survey is about..."
                    rows={4}
                    className="w-full p-4 border border-[#9767E4]/20 rounded-xl bg-[#0B111E]/40 backdrop-blur-sm text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none focus:ring-2 focus:ring-[#9767E4]/20 resize-none transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Current Page Editor */}
            <div className="bg-[#0B111E]/50 border border-[#9767E4]/15 backdrop-blur-sm rounded-2xl p-6 lg:p-8 mb-6 lg:mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#9767E4] to-[#C084FC] rounded-lg flex items-center justify-center">
                    <Layers className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-[#F8FAFC]">{getCurrentPage().title}</h3>
                    <p className="text-sm text-[#F8FAFC]/60">{getCurrentPage().questions.length} question{getCurrentPage().questions.length !== 1 ? 's' : ''}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setShowQuestionTypeDropdown(!showQuestionTypeDropdown)}
                      className="p-2 rounded-lg bg-[#9767E4]/10 border border-[#9767E4]/20 hover:bg-[#9767E4]/20 hover:border-[#9767E4]/40 transition-all duration-300"
                    >
                      <Plus className="w-4 h-4 text-[#9767E4]" />
                    </button>
                    
                    {showQuestionTypeDropdown && (
                      <div className="absolute top-full right-0 mt-2 w-64 bg-[#0B111E]/90 border border-[#9767E4]/20 backdrop-blur-sm rounded-xl shadow-xl z-[70]">
                        <div className="p-3 border-b border-[#9767E4]/10">
                          <h4 className="text-sm font-medium text-[#F8FAFC]">Add Question</h4>
                        </div>
                        <div className="p-2 max-h-64 overflow-y-auto">
                          {questionTypes.map(type => {
                            const Icon = type.icon;
                            return (
                              <button
                                key={type.id}
                                onClick={() => {
                                  addQuestion(getCurrentPage().id, type.id);
                                  setShowQuestionTypeDropdown(false);
                                }}
                                className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-[#9767E4]/10 transition-all duration-300 text-left relative"
                              >
                                <div className="w-8 h-8 bg-gradient-to-r from-[#9767E4]/20 to-[#C084FC]/20 rounded-lg flex items-center justify-center">
                                  <Icon className="w-4 h-4 text-[#9767E4]" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-[#F8FAFC]">{type.name}</p>
                                  <p className="text-xs text-[#F8FAFC]/60">{type.description}</p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {getCurrentPage().questions.length === 0 ? (
                  <div className="text-center py-12">
                    
                    <p className="text-[#F8FAFC]/60 text-lg mb-2">No questions yet</p>
                    <p className="text-[#F8FAFC]/40 text-sm">Click "Add Question" above to get started</p>
                  </div>
                ) : (
                  <>
                    {getCurrentPage().questions.map((question, questionIndex) => (
                    <div 
                      key={question.id} 
                      draggable
                      onDragStart={(e) => {
                        e.dataTransfer.setData('text/plain', JSON.stringify({
                          questionId: question.id,
                          questionIndex: questionIndex
                        }));
                        // Add visual feedback to the dragged element
                        e.currentTarget.style.opacity = '0.5';
                        e.currentTarget.style.transform = 'scale(0.95)';
                        e.currentTarget.style.border = '2px solid rgba(151, 103, 228, 0.8)';
                        e.currentTarget.style.backgroundColor = 'rgba(151, 103, 228, 0.1)';
                      }}
                      onDragEnd={(e) => {
                        // Reset visual feedback
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.border = '';
                        e.currentTarget.style.backgroundColor = '';
                      }}
                      className="group relative bg-[#0B111E]/50 border border-[#9767E4]/20 rounded-xl p-4 hover:border-[#9767E4]/40 hover:bg-[#0E1525]/60 transition-all duration-300 cursor-move"
                      onDragOver={(e) => {
                        e.preventDefault();
                        if (e.currentTarget.draggable) return; // Don't show drop zone on self
                        e.currentTarget.style.borderColor = 'rgba(151, 103, 228, 0.8)';
                        e.currentTarget.style.backgroundColor = 'rgba(14, 21, 37, 0.9)';
                        e.currentTarget.style.borderWidth = '2px';
                      }}
                      onDragLeave={(e) => {
                        e.currentTarget.style.borderColor = '';
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.borderWidth = '';
                      }}
                      onDrop={(e) => {
                        e.preventDefault();
                        e.currentTarget.style.borderColor = '';
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.borderWidth = '';
                        
                        try {
                          const draggedData = JSON.parse(e.dataTransfer.getData('text/plain'));
                          const { questionId: draggedQuestionId, questionIndex: draggedIndex } = draggedData;
                          
                          if (draggedQuestionId !== question.id) {
                            // Reorder questions
                            setSurvey(prev => ({
                              ...prev,
                              pages: prev.pages.map(page => {
                                if (page.id === currentPageId) {
                                  const questions = [...page.questions];
                                  const draggedQuestion = questions[draggedIndex];
                                  const targetIndex = questionIndex;
                                  
                                  // Remove from old position
                                  questions.splice(draggedIndex, 1);
                                  
                                  // Insert at new position
                                  const newTargetIndex = draggedIndex < targetIndex ? targetIndex - 1 : targetIndex;
                                  questions.splice(newTargetIndex, 0, draggedQuestion);
                                  
                                  return { ...page, questions };
                                }
                                return page;
                              })
                            }));
                          }
                        } catch (error) {
                          console.error('Error parsing drag data:', error);
                        }
                      }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          {/* Question Number */}
                          <div className="w-6 h-6 bg-gradient-to-r from-[#26B2F2]/20 to-[#C084FC]/20 rounded flex items-center justify-center">
                            <span className="text-xs font-medium text-[#26B2F2]">{questionIndex + 1}</span>
                          </div>

                          {/* Drag Handle */}
                          <div 
                            className="cursor-move text-[#9767E4]/60 hover:text-[#9767E4] transition-colors duration-300 flex items-center justify-center"
                            title="Drag to reorder"
                          >
                            <GripVertical className="w-4 h-4" />
                          </div>

                          {/* Question Type Dropdown */}
                          <div className="relative">
                            <select
                              value={question.type}
                              onChange={(e) => updateQuestion(question.id, 'type', e.target.value)}
                              onMouseDown={(e) => e.stopPropagation()}
                              onDragStart={(e) => e.preventDefault()}
                              className="appearance-none bg-[#0B111E]/90 border border-[#9767E4]/30 rounded-lg px-3 py-2 pr-8 text-xs text-[#F8FAFC] focus:outline-none focus:ring-1 focus:ring-[#9767E4]/50 focus:border-[#9767E4]/60 cursor-pointer hover:border-[#9767E4]/50 hover:bg-[#0B111E]/95 transition-all duration-300 backdrop-blur-md shadow-lg"
                              style={{
                                backgroundImage: 'none',
                                colorScheme: 'dark'
                              }}
                            >
                              {questionTypes.map(type => (
                                <option 
                                  key={type.id} 
                                  value={type.id}
                                  style={{
                                    backgroundColor: 'rgba(11, 17, 30, 0.95)',
                                    color: '#F8FAFC',
                                    backdropFilter: 'blur(12px)',
                                    borderColor: 'rgba(151, 103, 228, 0.3)',
                                    padding: '8px 12px'
                                  }}
                                >
                                  {type.name}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-[#9767E4]/70 pointer-events-none" />
                          </div>
                          
                          <div className="w-6 h-6 bg-gradient-to-r from-[#9767E4]/20 to-[#C084FC]/20 rounded flex items-center justify-center">
                            {(() => {
                              const QuestionIcon = questionTypes.find(type => type.id === question.type)?.icon || Type;
                              return <QuestionIcon className="w-3 h-3 text-[#9767E4]" />;
                            })()}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {/* Logic Button */}
                          <button
                            onClick={() => openLogicModal(question)}
                            onMouseDown={(e) => e.stopPropagation()}
                            onDragStart={(e) => e.preventDefault()}
                            className={`flex items-center space-x-1 px-2 py-1 rounded-md text-xs transition-all duration-300 hover:bg-[#9767E4]/10 ${
                              question.logic?.enabled && question.logic?.conditions?.length > 0
                                ? 'bg-[#9767E4]/20 text-[#9767E4] border border-[#9767E4]/30'
                                : 'text-[#F8FAFC]/60 hover:text-[#9767E4]'
                            }`}
                            title="Add conditional logic"
                          >
                            <Zap className="w-4 h-4" />
                            <span className="font-medium">Logic</span>
                            {question.logic?.enabled && question.logic?.conditions?.length > 0 && (
                              <span className="ml-1 bg-[#9767E4] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                {question.logic.conditions.length}
                              </span>
                            )}
                          </button>

                          {/* Validation Button - Only show for relevant question types */}
                          {needsValidationSettings(question.type) && (
                            <button
                              onClick={() => openValidationModal(question)}
                              onMouseDown={(e) => e.stopPropagation()}
                              onDragStart={(e) => e.preventDefault()}
                              className={`flex items-center space-x-1 px-2 py-1 rounded-md text-xs transition-all duration-300 hover:bg-[#26B2F2]/10 ${
                                question.validation?.enabled 
                                  ? 'bg-[#26B2F2]/20 text-[#26B2F2] border border-[#26B2F2]/30'
                                  : 'text-[#F8FAFC]/60 hover:text-[#26B2F2]'
                              }`}
                              title="Add validation settings"
                            >
                              <Settings className="w-4 h-4" />
                              <span className="font-medium">Validation</span>
                            </button>
                          )}

                          {/* Required Toggle */}
                          <button
                            onClick={() => updateQuestion(question.id, 'required', !question.required)}
                            onMouseDown={(e) => e.stopPropagation()}
                            onDragStart={(e) => e.preventDefault()}
                            className="flex items-center space-x-1 px-2 py-1 rounded-md text-xs transition-all duration-300 hover:bg-[#9767E4]/10"
                            title={question.required ? 'Make optional' : 'Make required'}
                          >
                            {question.required ? (
                              <>
                                <ToggleRight className="w-4 h-4 text-[#9767E4]" />
                                <span className="text-[#9767E4] font-medium">Required</span>
                              </>
                            ) : (
                              <>
                                <ToggleLeft className="w-4 h-4 text-[#F8FAFC]/40" />
                                <span className="text-[#F8FAFC]/60">Optional</span>
                              </>
                            )}
                          </button>
                          
                          {/* Move Controls */}
                          <div className="flex items-center space-x-1">
                            <button
                              onClick={() => moveQuestionUp(question.id)}
                              onMouseDown={(e) => e.stopPropagation()}
                              onDragStart={(e) => e.preventDefault()}
                              disabled={getCurrentPage().questions.findIndex(q => q.id === question.id) === 0}
                              className="p-1 rounded hover:bg-[#9767E4]/10 text-[#F8FAFC]/40 hover:text-[#9767E4] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-[#F8FAFC]/40 disabled:hover:bg-transparent"
                              title="Move question up"
                            >
                              <ChevronUp className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => moveQuestionDown(question.id)}
                              onMouseDown={(e) => e.stopPropagation()}
                              onDragStart={(e) => e.preventDefault()}
                              disabled={getCurrentPage().questions.findIndex(q => q.id === question.id) === getCurrentPage().questions.length - 1}
                              className="p-1 rounded hover:bg-[#9767E4]/10 text-[#F8FAFC]/40 hover:text-[#9767E4] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-[#F8FAFC]/40 disabled:hover:bg-transparent"
                              title="Move question down"
                            >
                              <ChevronDown className="w-3 h-3" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => deleteQuestion(question.id)}
                            onMouseDown={(e) => e.stopPropagation()}
                            onDragStart={(e) => e.preventDefault()}
                            className="p-1 rounded text-[#F8FAFC]/40 hover:text-red-400 transition-all duration-300"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <input
                          type="text"
                          value={question.title}
                          onChange={(e) => updateQuestion(question.id, 'title', e.target.value)}
                          onMouseDown={(e) => e.stopPropagation()}
                          onDragStart={(e) => e.preventDefault()}
                          placeholder="Enter your question..."
                          className={`w-full p-2 text-sm border border-[#9767E4]/20 rounded-lg bg-[#0B111E]/40 backdrop-blur-sm text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none focus:ring-1 focus:ring-[#9767E4]/20 transition-all duration-300 ${
                            question.logic?.enabled && question.logic?.conditions?.length > 0 ? 'pr-8' : ''
                          }`}
                        />
                        {question.logic?.enabled && question.logic?.conditions?.length > 0 && (
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center">
                            <Zap className="w-4 h-4 text-[#9767E4]" title={`${question.logic.conditions.length} logic condition${question.logic.conditions.length !== 1 ? 's' : ''}`} />
                          </div>
                        )}
                      </div>
                      
                      {/* Question Options for choice-based questions */}
                      {(question.type === 'multiple-choice' || question.type === 'checkbox' || question.type === 'dropdown' || question.type === 'image-choice') && (
                        <div className="mt-3 space-y-2">
                          {question.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex items-center space-x-2">
                              {question.type === 'image-choice' ? (
                                <div className="flex-1 p-3 border border-[#9767E4]/15 rounded-lg bg-[#0B111E]/30">
                                  <input
                                    type="text"
                                    value={option}
                                    onChange={(e) => updateOption(question.id, optionIndex, e.target.value)}
                                    onMouseDown={(e) => e.stopPropagation()}
                                    onDragStart={(e) => e.preventDefault()}
                                    className="w-full mb-3 p-2 text-xs border border-[#9767E4]/15 rounded bg-[#0B111E]/30 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/40 focus:outline-none"
                                    placeholder={`Option ${optionIndex + 1} text`}
                                  />
                                  {question.images && question.images[optionIndex] ? (
                                    <div className="relative">
                                      <img 
                                        src={question.images[optionIndex]} 
                                        alt={`Option ${optionIndex + 1}`}
                                        className="w-full h-24 object-cover rounded border border-[#9767E4]/20"
                                      />
                                      <button
                                        onClick={() => removeImage(question.id, optionIndex)}
                                        className="absolute top-1 right-1 p-1 bg-red-500/80 rounded-full text-white hover:bg-red-600 transition-all duration-300"
                                      >
                                        <X className="w-3 h-3" />
                                      </button>
                                    </div>
                                  ) : (
                                    <div className="relative">
                                      <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                          const file = e.target.files[0];
                                          if (file) handleImageUpload(question.id, optionIndex, file);
                                        }}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        id={`image-upload-${question.id}-${optionIndex}`}
                                      />
                                      <label 
                                        htmlFor={`image-upload-${question.id}-${optionIndex}`}
                                        className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-[#9767E4]/30 rounded-lg cursor-pointer hover:border-[#9767E4]/50 hover:bg-[#9767E4]/5 transition-all duration-300"
                                      >
                                        <Image className="w-6 h-6 text-[#9767E4] mb-2" />
                                        <span className="text-xs text-[#F8FAFC]/60">Click to upload image</span>
                                        <span className="text-xs text-[#F8FAFC]/40 mt-1">PNG, JPG up to 5MB</span>
                                      </label>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <input
                                  type="text"
                                  value={option}
                                  onChange={(e) => updateOption(question.id, optionIndex, e.target.value)}
                                  onMouseDown={(e) => e.stopPropagation()}
                                  onDragStart={(e) => e.preventDefault()}
                                  className="flex-1 p-2 text-xs border border-[#9767E4]/15 rounded bg-[#0B111E]/30 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/40 focus:outline-none transition-all duration-300"
                                  placeholder={`Option ${optionIndex + 1}`}
                                />
                              )}
                              {question.options.length > 2 && (
                                <button
                                  onClick={() => deleteOption(question.id, optionIndex)}
                                  onMouseDown={(e) => e.stopPropagation()}
                                  onDragStart={(e) => e.preventDefault()}
                                  className="p-1 rounded text-[#F8FAFC]/40 hover:text-red-400 transition-all duration-300"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              )}
                            </div>
                          ))}
                          <button
                            onClick={() => addOption(question.id)}
                            onMouseDown={(e) => e.stopPropagation()}
                            onDragStart={(e) => e.preventDefault()}
                            className="flex items-center space-x-1 p-2 text-xs rounded border-2 border-dashed border-[#9767E4]/20 hover:border-[#9767E4]/40 text-[#F8FAFC]/60 hover:text-[#9767E4] transition-all duration-300"
                          >
                            <Plus className="w-3 h-3" />
                            <span>Add Option</span>
                          </button>
                        </div>
                      )}

                      {/* Matrix/Grid Question */}
                      {question.type === 'matrix' && (
                        <div className="mt-3 space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-medium text-[#F8FAFC]/80 mb-2">Rows</label>
                              <div className="space-y-2">
                                {question.validation?.matrixRows?.map((row, rowIndex) => (
                                  <div key={rowIndex} className="flex items-center space-x-2">
                                    <input
                                      type="text"
                                      value={row}
                                      onChange={(e) => {
                                        const newRows = [...(question.validation?.matrixRows || [])];
                                        newRows[rowIndex] = e.target.value;
                                        updateQuestionValidation(question.id, 'matrixRows', newRows);
                                      }}
                                      className="flex-1 p-2 text-xs border border-[#9767E4]/15 rounded bg-[#0B111E]/30 text-[#F8FAFC] focus:border-[#9767E4]/40 focus:outline-none"
                                      placeholder={`Row ${rowIndex + 1}`}
                                    />
                                    <button
                                      onClick={() => {
                                        const newRows = question.validation?.matrixRows?.filter((_, i) => i !== rowIndex) || [];
                                        updateQuestionValidation(question.id, 'matrixRows', newRows);
                                      }}
                                      className="p-1 rounded text-[#F8FAFC]/40 hover:text-red-400"
                                    >
                                      <Trash2 className="w-3 h-3" />
                                    </button>
                                  </div>
                                ))}
                                <button
                                  onClick={() => {
                                    const newRows = [...(question.validation?.matrixRows || []), `Row ${(question.validation?.matrixRows?.length || 0) + 1}`];
                                    updateQuestionValidation(question.id, 'matrixRows', newRows);
                                  }}
                                  className="flex items-center space-x-1 p-2 text-xs rounded border-2 border-dashed border-[#9767E4]/20 hover:border-[#9767E4]/40 text-[#F8FAFC]/60 hover:text-[#9767E4] w-full"
                                >
                                  <Plus className="w-3 h-3" />
                                  <span>Add Row</span>
                                </button>
                              </div>
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-[#F8FAFC]/80 mb-2">Columns</label>
                              <div className="space-y-2">
                                {question.validation?.matrixColumns?.map((col, colIndex) => (
                                  <div key={colIndex} className="flex items-center space-x-2">
                                    <input
                                      type="text"
                                      value={col}
                                      onChange={(e) => {
                                        const newCols = [...(question.validation?.matrixColumns || [])];
                                        newCols[colIndex] = e.target.value;
                                        updateQuestionValidation(question.id, 'matrixColumns', newCols);
                                      }}
                                      className="flex-1 p-2 text-xs border border-[#9767E4]/15 rounded bg-[#0B111E]/30 text-[#F8FAFC] focus:border-[#9767E4]/40 focus:outline-none"
                                      placeholder={`Column ${colIndex + 1}`}
                                    />
                                    <button
                                      onClick={() => {
                                        const newCols = question.validation?.matrixColumns?.filter((_, i) => i !== colIndex) || [];
                                        updateQuestionValidation(question.id, 'matrixColumns', newCols);
                                      }}
                                      className="p-1 rounded text-[#F8FAFC]/40 hover:text-red-400"
                                    >
                                      <Trash2 className="w-3 h-3" />
                                    </button>
                                  </div>
                                ))}
                                <button
                                  onClick={() => {
                                    const newCols = [...(question.validation?.matrixColumns || []), `Column ${(question.validation?.matrixColumns?.length || 0) + 1}`];
                                    updateQuestionValidation(question.id, 'matrixColumns', newCols);
                                  }}
                                  className="flex items-center space-x-1 p-2 text-xs rounded border-2 border-dashed border-[#9767E4]/20 hover:border-[#9767E4]/40 text-[#F8FAFC]/60 hover:text-[#9767E4] w-full"
                                >
                                  <Plus className="w-3 h-3" />
                                  <span>Add Column</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          
                          {/* Matrix Preview */}
                          {question.validation?.matrixRows?.length > 0 && question.validation?.matrixColumns?.length > 0 && (
                            <div className="mt-4 p-4 bg-[#0B111E]/30 rounded-lg border border-[#9767E4]/10">
                              <h6 className="text-xs font-medium text-[#F8FAFC]/80 mb-3">Matrix Preview</h6>
                              <div className="overflow-x-auto">
                                <table className="w-full text-xs">
                                  <thead>
                                    <tr>
                                      <th className="text-left p-2 text-[#F8FAFC]/60"></th>
                                      {question.validation.matrixColumns.map((col, index) => (
                                        <th key={index} className="text-center p-2 text-[#F8FAFC]/80 min-w-20">
                                          {col}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {question.validation.matrixRows.map((row, rowIndex) => (
                                      <tr key={rowIndex} className="border-t border-[#9767E4]/10">
                                        <td className="p-2 text-[#F8FAFC]/80 font-medium">{row}</td>
                                        {question.validation.matrixColumns.map((_, colIndex) => (
                                          <td key={colIndex} className="p-2 text-center">
                                            <input 
                                              type="radio" 
                                              name={`matrix-${question.id}-${rowIndex}`}
                                              className="w-3 h-3 text-[#9767E4] bg-[#0B111E]/40 border-[#9767E4]/30 focus:ring-[#9767E4]/50"
                                              disabled
                                            />
                                          </td>
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* Add New Question Button */}
                  <div className="relative" ref={addQuestionDropdownRef}>
                    <button
                      onClick={() => setShowAddQuestionDropdown(!showAddQuestionDropdown)}
                      className="w-full group relative bg-[#0B111E]/30 border-2 border-dashed border-[#9767E4]/20 backdrop-blur-sm rounded-xl p-6 hover:border-[#9767E4]/40 hover:bg-[#0E1525]/40 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#9767E4]/10 to-[#C084FC]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Plus className="w-5 h-5 text-[#9767E4] group-hover:text-[#C084FC] transition-colors duration-300" />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-[#F8FAFC] group-hover:text-white transition-colors duration-300">Add New Question</p>
                          <p className="text-xs text-[#F8FAFC]/60 group-hover:text-[#F8FAFC]/80 transition-colors duration-300">Click to choose question type</p>
                        </div>
                      </div>
                    </button>
                    
                    {showAddQuestionDropdown && (
                      <div 
                        data-dropdown-container
                        className="absolute bottom-full left-0 mb-2 w-full bg-[#0B111E]/95 border border-[#9767E4]/20 backdrop-blur-md rounded-xl shadow-2xl z-[9999]"
                      >
                        <div className="p-3 border-b border-[#9767E4]/10">
                          <h4 className="text-sm font-medium text-[#F8FAFC]">Choose Question Type</h4>
                        </div>
                        <div className="p-2 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-[#9767E4]/30 scrollbar-track-[#0B111E]/20">
                          {questionTypes.map(type => {
                            const Icon = type.icon;
                            return (
                              <div key={type.id} className="relative">
                                <button
                                  onClick={() => {
                                    addQuestion(getCurrentPage().id, type.id);
                                    setShowAddQuestionDropdown(false);
                                    setHoveredQuestionType(null); // Hide preview on click
                                  }}
                                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-[#9767E4]/10 transition-all duration-300 text-left relative group"
                                >
                                  <div className="w-8 h-8 bg-gradient-to-r from-[#9767E4]/20 to-[#C084FC]/20 rounded-lg flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-[#9767E4]" />
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-sm font-medium text-[#F8FAFC]">{type.name}</p>
                                    <p className="text-xs text-[#F8FAFC]/60">{type.description}</p>
                                  </div>
                                  
                                  {/* Eye icon for preview */}
                                  <div 
                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1.5 rounded-md hover:bg-[#9767E4]/20"
                                    onMouseEnter={(e) => {
                                      e.stopPropagation();
                                      const rect = e.currentTarget.getBoundingClientRect();
                                      const previewWidth = 320;
                                      
                                      // Position preview directly to the left of the eye icon with no gap
                                      setPreviewPosition({ 
                                        x: rect.left - previewWidth, // Directly adjacent to the left of eye icon
                                        y: rect.top 
                                      });
                                      setHoveredQuestionType(type.id);
                                    }}
                                    onMouseLeave={(e) => {
                                      e.stopPropagation();
                                      setHoveredQuestionType(null);
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Eye className="w-4 h-4 text-[#9767E4]" />
                                  </div>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Publish Modal */}
      {showPublishModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-[#0B111E]/75 border border-[#9767E4]/20 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#9767E4]/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#9767E4] to-[#C084FC] rounded-lg flex items-center justify-center">
                  <Save className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#F8FAFC]">Publish Survey</h3>
                  <p className="text-sm text-[#F8FAFC]/60">Configure advanced targeting and survey settings</p>
                </div>
              </div>
              <button
                onClick={() => setShowPublishModal(false)}
                className="p-2 rounded-lg hover:bg-[#9767E4]/10 transition-all duration-300"
              >
                <X className="w-5 h-5 text-[#F8FAFC]/60" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col h-full">
              {/* Tab Navigation */}
              <div className="flex border-b border-[#9767E4]/20 bg-[#0B111E]/50">
                <button
                  onClick={() => setPublishModalTab('basic')}
                  className={`px-6 py-4 text-sm font-medium transition-all duration-300 relative ${
                    publishModalTab === 'basic'
                      ? 'text-[#9767E4] border-b-2 border-[#9767E4]'
                      : 'text-[#F8FAFC]/60 hover:text-[#F8FAFC]/80'
                  }`}
                >
                  <Clock className="w-4 h-4 inline mr-2" />
                  Basic Settings
                </button>
                <button
                  onClick={() => setPublishModalTab('location')}
                  className={`px-6 py-4 text-sm font-medium transition-all duration-300 relative ${
                    publishModalTab === 'location'
                      ? 'text-[#9767E4] border-b-2 border-[#9767E4]'
                      : 'text-[#F8FAFC]/60 hover:text-[#F8FAFC]/80'
                  }`}
                >
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Location Targeting
                </button>
                <button
                  onClick={() => setPublishModalTab('interests')}
                  className={`px-6 py-4 text-sm font-medium transition-all duration-300 relative ${
                    publishModalTab === 'interests'
                      ? 'text-[#9767E4] border-b-2 border-[#9767E4]'
                      : 'text-[#F8FAFC]/60 hover:text-[#F8FAFC]/80'
                  }`}
                >
                  <Users className="w-4 h-4 inline mr-2" />
                  Interests & Behaviors
                </button>
              </div>

              {/* Tab Content */}
              <div className="flex-1 p-6 overflow-y-auto max-h-[60vh]">
                
                {/* Basic Settings Tab */}
                {publishModalTab === 'basic' && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#26B2F2] to-[#C084FC] rounded-lg flex items-center justify-center">
                        <Clock className="w-3 h-3 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-[#F8FAFC]">Basic Survey Settings</h4>
                    </div>

                  {/* Response Limit */}
                  <div>
                    <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                      Response Limit
                    </label>
                    <input
                      type="number"
                      value={survey.publishing.responseLimit || ''}
                      onChange={(e) => setSurvey(prev => ({ 
                        ...prev, 
                        publishing: { 
                          ...prev.publishing, 
                          responseLimit: e.target.value ? parseInt(e.target.value) : null 
                        }
                      }))}
                      placeholder="Maximum responses"
                      className="w-full p-3 border border-[#9767E4]/20 rounded-lg bg-[#0B111E]/40 backdrop-blur-sm text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none focus:ring-1 focus:ring-[#9767E4]/20 transition-all duration-300"
                    />
                  </div>

                  {/* Start Date */}
                  <div>
                    <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                      Start Date
                    </label>
                    <input
                      type="datetime-local"
                      value={survey.publishing.startDate}
                      onChange={(e) => setSurvey(prev => ({ 
                        ...prev, 
                        publishing: { ...prev.publishing, startDate: e.target.value }
                      }))}
                      className="w-full p-3 border border-[#9767E4]/20 rounded-lg bg-[#0B111E]/40 backdrop-blur-sm text-[#F8FAFC] focus:border-[#9767E4]/50 focus:outline-none focus:ring-1 focus:ring-[#9767E4]/20 transition-all duration-300"
                    />
                  </div>

                  {/* End Date */}
                  <div>
                    <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                      End Date
                    </label>
                    <input
                      type="datetime-local"
                      value={survey.publishing.endDate}
                      onChange={(e) => setSurvey(prev => ({ 
                        ...prev, 
                        publishing: { ...prev.publishing, endDate: e.target.value }
                      }))}
                      className="w-full p-3 border border-[#9767E4]/20 rounded-lg bg-[#0B111E]/40 backdrop-blur-sm text-[#F8FAFC] focus:border-[#9767E4]/50 focus:outline-none focus:ring-1 focus:ring-[#9767E4]/20 transition-all duration-300"
                    />
                  </div>

                  {/* Tags System */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Tag className="w-4 h-4 text-[#9767E4]" />
                      <label className="block text-sm font-medium text-[#F8FAFC]/80">
                        Target Tags
                      </label>
                    </div>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Add tags (e.g., millennials, tech-savvy, urban)"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && e.target.value.trim()) {
                            handleTagAdd(e.target.value.trim());
                            e.target.value = '';
                          }
                        }}
                        className="w-full p-3 border border-[#9767E4]/20 rounded-lg bg-[#0B111E]/40 backdrop-blur-sm text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none focus:ring-1 focus:ring-[#9767E4]/20 transition-all duration-300"
                      />
                      <div className="flex flex-wrap gap-2">
                        {survey.publishing.tags?.map((tag, index) => (
                          <span key={index} className="inline-flex items-center space-x-1 px-3 py-1 bg-[#9767E4]/20 border border-[#9767E4]/30 rounded-full text-xs text-[#9767E4]">
                            <span>{tag}</span>
                            <button
                              onClick={() => handleTagRemove(tag)}
                              className="hover:text-red-400 transition-colors duration-200"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  </div>
                )}

                {/* Location Targeting Tab */}
                {publishModalTab === 'location' && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#9767E4] to-[#C084FC] rounded-lg flex items-center justify-center">
                        <MapPin className="w-3 h-3 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-[#F8FAFC]">Location Targeting</h4>
                    </div>

                  {/* Location Targeting */}
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                      Target Location (Click on map to set location)
                    </label>
                    
                    {/* Location Search Input */}
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Search for a location (e.g., New York, London, Tokyo)"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleLocationSearch(e.target.value);
                          }
                        }}
                        className="flex-1 p-3 border border-[#9767E4]/20 rounded-lg bg-[#0B111E]/40 backdrop-blur-sm text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none focus:ring-1 focus:ring-[#9767E4]/20 transition-all duration-300"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          const input = e.target.parentElement.querySelector('input');
                          if (input.value.trim()) {
                            handleLocationSearch(input.value);
                          }
                        }}
                        disabled={isSearchingLocation}
                        className="px-4 py-3 bg-[#9767E4] hover:bg-[#9767E4]/80 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-300 flex items-center"
                      >
                        {isSearchingLocation ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <Search className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    
                    {/* Map */}
                    <LocationTargetingMap
                      center={survey.publishing.targetAudience.location.center}
                      radius={survey.publishing.targetAudience.location.radius}
                      onLocationChange={handleLocationChange}
                    />
                    
                    {/* Radius Slider */}
                    <div>
                      <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                        Radius: {survey.publishing.targetAudience.location.radius} km
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={survey.publishing.targetAudience.location.radius}
                        onChange={(e) => handleRadiusChange(parseInt(e.target.value))}
                        className="w-full h-2 bg-[#F8FAFC]/10 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #9767E4 0%, #C084FC 50%, #26B2F2 100%)`
                        }}
                      />
                    </div>
                  </div>

                  {/* Demographics */}
                  <div className="space-y-4">
                    <h5 className="text-md font-semibold text-[#F8FAFC] flex items-center space-x-2">
                      <Users className="w-4 h-4 text-[#26B2F2]" />
                      <span>Demographics</span>
                    </h5>
                    
                    {/* Age Range */}
                    <div>
                      <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                        Age Range: {survey.publishing.targetAudience.demographics.ageRange.min} - {survey.publishing.targetAudience.demographics.ageRange.max}
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="range"
                          min="13"
                          max="80"
                          value={survey.publishing.targetAudience.demographics.ageRange.min}
                          onChange={(e) => setSurvey(prev => ({ 
                            ...prev, 
                            publishing: { 
                              ...prev.publishing, 
                              targetAudience: {
                                ...prev.publishing.targetAudience,
                                demographics: {
                                  ...prev.publishing.targetAudience.demographics,
                                  ageRange: {
                                    ...prev.publishing.targetAudience.demographics.ageRange,
                                    min: parseInt(e.target.value)
                                  }
                                }
                              }
                            }
                          }))}
                          className="w-full"
                        />
                        <input
                          type="range"
                          min="13"
                          max="80"
                          value={survey.publishing.targetAudience.demographics.ageRange.max}
                          onChange={(e) => setSurvey(prev => ({ 
                            ...prev, 
                            publishing: { 
                              ...prev.publishing, 
                              targetAudience: {
                                ...prev.publishing.targetAudience,
                                demographics: {
                                  ...prev.publishing.targetAudience.demographics,
                                  ageRange: {
                                    ...prev.publishing.targetAudience.demographics.ageRange,
                                    max: parseInt(e.target.value)
                                  }
                                }
                              }
                            }
                          }))}
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                        Gender
                      </label>
                      <select
                        value={survey.publishing.targetAudience.demographics.gender}
                        onChange={(e) => setSurvey(prev => ({ 
                          ...prev, 
                          publishing: { 
                            ...prev.publishing, 
                            targetAudience: {
                              ...prev.publishing.targetAudience,
                              demographics: {
                                ...prev.publishing.targetAudience.demographics,
                                gender: e.target.value
                              }
                            }
                          }
                        }))}
                        className="w-full p-3 border border-[#9767E4]/20 rounded-lg bg-[#0B111E]/40 text-[#F8FAFC] focus:border-[#9767E4]/50 focus:outline-none"
                      >
                        <option value="all">All Genders</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Education Level */}
                    <div>
                      <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                        Education Level
                      </label>
                      <Select
                        isMulti
                        options={targetingOptions.education}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        placeholder="Select education levels..."
                        styles={{
                          control: (base) => ({
                            ...base,
                            backgroundColor: 'rgba(11, 17, 30, 0.4)',
                            borderColor: 'rgba(151, 103, 228, 0.2)',
                            color: '#F8FAFC'
                          }),
                          menu: (base) => ({
                            ...base,
                            backgroundColor: 'rgba(11, 17, 30, 0.9)',
                            border: '1px solid rgba(151, 103, 228, 0.2)'
                          }),
                          option: (base, state) => ({
                            ...base,
                            backgroundColor: state.isFocused ? 'rgba(151, 103, 228, 0.2)' : 'transparent',
                            color: '#F8FAFC'
                          }),
                          multiValue: (base) => ({
                            ...base,
                            backgroundColor: 'rgba(151, 103, 228, 0.2)'
                          }),
                          multiValueLabel: (base) => ({
                            ...base,
                            color: '#9767E4'
                          })
                        }}
                      />
                    </div>

                    {/* Income Range */}
                    <div>
                      <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                        Income Range
                      </label>
                      <Select
                        isMulti
                        options={targetingOptions.income}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        placeholder="Select income ranges..."
                        styles={{
                          control: (base) => ({
                            ...base,
                            backgroundColor: 'rgba(11, 17, 30, 0.4)',
                            borderColor: 'rgba(151, 103, 228, 0.2)',
                            color: '#F8FAFC'
                          }),
                          menu: (base) => ({
                            ...base,
                            backgroundColor: 'rgba(11, 17, 30, 0.9)',
                            border: '1px solid rgba(151, 103, 228, 0.2)'
                          }),
                          option: (base, state) => ({
                            ...base,
                            backgroundColor: state.isFocused ? 'rgba(151, 103, 228, 0.2)' : 'transparent',
                            color: '#F8FAFC'
                          }),
                          multiValue: (base) => ({
                            ...base,
                            backgroundColor: 'rgba(38, 178, 242, 0.2)'
                          }),
                          multiValueLabel: (base) => ({
                            ...base,
                            color: '#26B2F2'
                          })
                        }}
                      />
                    </div>
                  </div>
                  </div>
                )}

                {/* Interests & Behaviors Tab */}
                {publishModalTab === 'interests' && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#C084FC] to-[#26B2F2] rounded-lg flex items-center justify-center">
                        <Heart className="w-3 h-3 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-[#F8FAFC]">Interests & Behaviors</h4>
                    </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                      Interests
                    </label>
                    <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                      {targetingOptions.interests.map((interest) => {
                        const Icon = interest.icon;
                        const isSelected = survey.publishing.targetAudience.interests.includes(interest.value);
                        return (
                          <button
                            key={interest.value}
                            onClick={() => {
                              const currentInterests = survey.publishing.targetAudience.interests || [];
                              const newInterests = isSelected 
                                ? currentInterests.filter(i => i !== interest.value)
                                : [...currentInterests, interest.value];
                              setSurvey(prev => ({ 
                                ...prev, 
                                publishing: { 
                                  ...prev.publishing, 
                                  targetAudience: {
                                    ...prev.publishing.targetAudience,
                                    interests: newInterests
                                  }
                                }
                              }));
                            }}
                            className={`flex items-center space-x-2 p-2 rounded-lg border transition-all duration-300 text-left ${
                              isSelected
                                ? 'bg-[#9767E4]/20 border-[#9767E4]/40 text-[#9767E4]'
                                : 'bg-[#0B111E]/30 border-[#9767E4]/10 text-[#F8FAFC]/60 hover:border-[#9767E4]/30'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-xs">{interest.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Professional Targeting */}
                  <div>
                    <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                      Industry
                    </label>
                    <Select
                      isMulti
                      options={targetingOptions.industries}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      placeholder="Select industries..."
                      styles={{
                        control: (base) => ({
                          ...base,
                          backgroundColor: 'rgba(11, 17, 30, 0.4)',
                          borderColor: 'rgba(151, 103, 228, 0.2)',
                          color: '#F8FAFC'
                        }),
                        menu: (base) => ({
                          ...base,
                          backgroundColor: 'rgba(11, 17, 30, 0.9)',
                          border: '1px solid rgba(151, 103, 228, 0.2)'
                        }),
                        option: (base, state) => ({
                          ...base,
                          backgroundColor: state.isFocused ? 'rgba(151, 103, 228, 0.2)' : 'transparent',
                          color: '#F8FAFC'
                        }),
                        multiValue: (base) => ({
                          ...base,
                          backgroundColor: 'rgba(192, 132, 252, 0.2)'
                        }),
                        multiValueLabel: (base) => ({
                          ...base,
                          color: '#C084FC'
                        })
                      }}
                    />
                  </div>

                  {/* Device Usage */}
                  <div>
                    <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                      Device Usage
                    </label>
                    <Select
                      isMulti
                      options={targetingOptions.deviceUsage}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      placeholder="Select device usage patterns..."
                      styles={{
                        control: (base) => ({
                          ...base,
                          backgroundColor: 'rgba(11, 17, 30, 0.4)',
                          borderColor: 'rgba(151, 103, 228, 0.2)',
                          color: '#F8FAFC'
                        }),
                        menu: (base) => ({
                          ...base,
                          backgroundColor: 'rgba(11, 17, 30, 0.9)',
                          border: '1px solid rgba(151, 103, 228, 0.2)'
                        }),
                        option: (base, state) => ({
                          ...base,
                          backgroundColor: state.isFocused ? 'rgba(151, 103, 228, 0.2)' : 'transparent',
                          color: '#F8FAFC'
                        }),
                        multiValue: (base) => ({
                          ...base,
                          backgroundColor: 'rgba(38, 178, 242, 0.2)'
                        }),
                        multiValueLabel: (base) => ({
                          ...base,
                          color: '#26B2F2'
                        })
                      }}
                    />
                  </div>

                  {/* Online Activity */}
                  <div>
                    <label className="block text-sm font-medium text-[#F8FAFC]/80 mb-3">
                      Online Activity
                    </label>
                    <Select
                      isMulti
                      options={targetingOptions.onlineActivity}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      placeholder="Select online behaviors..."
                      styles={{
                        control: (base) => ({
                          ...base,
                          backgroundColor: 'rgba(11, 17, 30, 0.4)',
                          borderColor: 'rgba(151, 103, 228, 0.2)',
                          color: '#F8FAFC'
                        }),
                        menu: (base) => ({
                          ...base,
                          backgroundColor: 'rgba(11, 17, 30, 0.9)',
                          border: '1px solid rgba(151, 103, 228, 0.2)'
                        }),
                        option: (base, state) => ({
                          ...base,
                          backgroundColor: state.isFocused ? 'rgba(151, 103, 228, 0.2)' : 'transparent',
                          color: '#F8FAFC'
                        }),
                        multiValue: (base) => ({
                          ...base,
                          backgroundColor: 'rgba(192, 132, 252, 0.2)'
                        }),
                        multiValueLabel: (base) => ({
                          ...base,
                          color: '#C084FC'
                        })
                      }}
                    />
                  </div>

                  {/* Estimated Reach */}
                  <div className="p-4 bg-[#0B111E]/30 rounded-xl border border-[#26B2F2]/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="w-4 h-4 text-[#26B2F2]" />
                      <span className="text-sm font-medium text-[#F8FAFC]">Estimated Reach</span>
                    </div>
                    <div className="text-2xl font-bold text-[#26B2F2]">2.5M - 3.2M</div>
                    <div className="text-xs text-[#F8FAFC]/60">people based on current targeting</div>
                  </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-[#9767E4]/20">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowPublishModal(false)}
                  className="px-4 py-2 text-sm text-[#F8FAFC]/60 hover:text-[#F8FAFC] transition-all duration-300"
                >
                  Cancel
                </button>
                <div className="text-xs text-[#F8FAFC]/40">
                  Targeting {survey.publishing.tags?.length || 0} tags • 
                  {survey.publishing.targetAudience.interests?.length || 0} interests selected
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 border border-[#9767E4]/40 text-[#9767E4] text-sm font-medium rounded-lg hover:bg-[#9767E4]/10 transition-all duration-300">
                  Save Draft
                </button>
                <button
                  onClick={savePublishModal}
                  className="px-6 py-2 bg-gradient-to-r from-[#9767E4] to-[#C084FC] text-white text-sm font-medium rounded-lg hover:from-[#8B5CF6] hover:to-[#A855F7] transition-all duration-300"
                >
                  Publish Survey
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Validation Modal */}
      {showValidationModal && currentValidationQuestion && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-[#0B111E]/75 border border-[#9767E4]/20 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#9767E4]/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#26B2F2] to-[#C084FC] rounded-lg flex items-center justify-center">
                  <Settings className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#F8FAFC]">Question Validation</h3>
                  <p className="text-sm text-[#F8FAFC]/60">Set validation rules for this question</p>
                </div>
              </div>
              <button
                onClick={saveValidationModal}
                className="p-2 rounded-lg hover:bg-[#9767E4]/10 transition-all duration-300"
              >
                <X className="w-5 h-5 text-[#F8FAFC]/60" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-6">
                {/* Current Question Info */}
                <div className="p-4 bg-[#0B111E]/50 rounded-xl border border-[#9767E4]/10">
                  <h4 className="text-sm font-medium text-[#F8FAFC] mb-2">Current Question</h4>
                  <p className="text-sm text-[#F8FAFC]/70">
                    {currentValidationQuestion.title || 'Untitled Question'} ({currentValidationQuestion.type})
                  </p>
                </div>

                {/* Text/Textarea Validation */}
                {(currentValidationQuestion.type === 'text' || currentValidationQuestion.type === 'textarea') && (
                  <>
                    {/* Character Limits */}
                    <div>
                      <h5 className="text-sm font-medium text-[#F8FAFC] mb-3">Character Limits</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-[#F8FAFC]/60 mb-1">Minimum Length</label>
                          <input
                            type="number"
                            value={currentValidationQuestion.validation?.minLength || ''}
                            onChange={(e) => updateQuestionValidation(currentValidationQuestion.id, 'minLength', e.target.value ? parseInt(e.target.value) : null)}
                            placeholder="Min characters"
                            className="w-full p-2 text-xs border border-[#9767E4]/20 rounded bg-[#0B111E]/40 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-[#F8FAFC]/60 mb-1">Maximum Length</label>
                          <input
                            type="number"
                            value={currentValidationQuestion.validation?.maxLength || ''}
                            onChange={(e) => updateQuestionValidation(currentValidationQuestion.id, 'maxLength', e.target.value ? parseInt(e.target.value) : null)}
                            placeholder="Max characters"
                            className="w-full p-2 text-xs border border-[#9767E4]/20 rounded bg-[#0B111E]/40 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Validation */}
                    <div className="flex items-center justify-between p-4 bg-[#0B111E]/30 rounded-xl border border-[#9767E4]/10">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-[#26B2F2]" />
                        <div>
                          <p className="text-sm font-medium text-[#F8FAFC]">Email Validation</p>
                          <p className="text-xs text-[#F8FAFC]/60">Validate as email address</p>
                        </div>
                      </div>
                      <button
                        onClick={() => updateQuestionValidation(currentValidationQuestion.id, 'emailValidation', !currentValidationQuestion.validation?.emailValidation)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                          currentValidationQuestion.validation?.emailValidation ? 'bg-[#26B2F2]' : 'bg-[#F8FAFC]/20'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                          currentValidationQuestion.validation?.emailValidation ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </>
                )}

                {/* Number Validation */}
                {currentValidationQuestion.type === 'number' && (
                  <>
                    {/* Number Range */}
                    <div>
                      <h5 className="text-sm font-medium text-[#F8FAFC] mb-3">Number Range</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-[#F8FAFC]/60 mb-1">Minimum Value</label>
                          <input
                            type="number"
                            value={currentValidationQuestion.validation?.minValue || ''}
                            onChange={(e) => updateQuestionValidation(currentValidationQuestion.id, 'minValue', e.target.value ? parseFloat(e.target.value) : null)}
                            placeholder="Min value"
                            className="w-full p-2 text-xs border border-[#9767E4]/20 rounded bg-[#0B111E]/40 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-[#F8FAFC]/60 mb-1">Maximum Value</label>
                          <input
                            type="number"
                            value={currentValidationQuestion.validation?.maxValue || ''}
                            onChange={(e) => updateQuestionValidation(currentValidationQuestion.id, 'maxValue', e.target.value ? parseFloat(e.target.value) : null)}
                            placeholder="Max value"
                            className="w-full p-2 text-xs border border-[#9767E4]/20 rounded bg-[#0B111E]/40 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone Number with Country Code */}
                    <div className="flex items-center justify-between p-4 bg-[#0B111E]/30 rounded-xl border border-[#9767E4]/10">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-[#26B2F2]" />
                        <div>
                          <p className="text-sm font-medium text-[#F8FAFC]">Phone with Country Code</p>
                          <p className="text-xs text-[#F8FAFC]/60">Include country code selection</p>
                        </div>
                      </div>
                      <button
                        onClick={() => updateQuestionValidation(currentValidationQuestion.id, 'phoneWithCountryCode', !currentValidationQuestion.validation?.phoneWithCountryCode)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                          currentValidationQuestion.validation?.phoneWithCountryCode ? 'bg-[#26B2F2]' : 'bg-[#F8FAFC]/20'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                          currentValidationQuestion.validation?.phoneWithCountryCode ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-[#9767E4]/20">
              <button
                onClick={saveValidationModal}
                className="px-4 py-2 text-sm text-[#F8FAFC]/60 hover:text-[#F8FAFC] transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={saveValidationModal}
                className="px-4 py-2 bg-gradient-to-r from-[#26B2F2] to-[#C084FC] text-white text-sm font-medium rounded-lg hover:from-[#0EA5E9] hover:to-[#A855F7] transition-all duration-300"
              >
                Save Validation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Logic Modal */}
      {showLogicModal && currentLogicQuestion && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-[#0B111E]/75 border border-[#9767E4]/20 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-2xl  overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#9767E4]/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#9767E4] to-[#C084FC] rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#F8FAFC]">Question Logic</h3>
                  <p className="text-sm text-[#F8FAFC]/60">Add conditional logic for advanced survey flow</p>
                </div>
              </div>
              <button
                onClick={saveLogicModal}
                className="p-2 rounded-lg hover:bg-[#9767E4]/10 transition-all duration-300"
              >
                <X className="w-5 h-5 text-[#F8FAFC]/60" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-6">
                {/* Question Info */}
                <div className="p-4 bg-[#0B111E]/50 rounded-xl border border-[#9767E4]/10">
                  <h4 className="text-sm font-medium text-[#F8FAFC] mb-2">Current Question</h4>
                  <p className="text-sm text-[#F8FAFC]/70">
                    {currentLogicQuestion.title || 'Untitled Question'} ({currentLogicQuestion.type})
                  </p>
                </div>

                {/* Logic Conditions */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-[#F8FAFC]">Logic Conditions</h4>
                    <button
                      onClick={() => addLogicCondition(currentLogicQuestion.id)}
                      className="flex items-center space-x-2 px-3 py-1.5 bg-[#9767E4]/10 border border-[#9767E4]/20 rounded-lg hover:bg-[#9767E4]/20 transition-all duration-300"
                    >
                      <Plus className="w-3 h-3 text-[#9767E4]" />
                      <span className="text-xs text-[#9767E4] font-medium">Add Condition</span>
                    </button>
                  </div>

                  {currentLogicQuestion.logic?.conditions?.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#9767E4]/10 to-[#C084FC]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Zap className="w-6 h-6 text-[#9767E4]/60" />
                      </div>
                      <p className="text-[#F8FAFC]/60 text-sm mb-1">No logic conditions yet</p>
                      <p className="text-[#F8FAFC]/40 text-xs">Add conditions to create smart survey flows</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {currentLogicQuestion.logic.conditions.map((condition, index) => (
                        <div key={condition.id} className="p-4 bg-[#0B111E]/30 border border-[#9767E4]/10 rounded-xl">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-medium text-[#26B2F2]">Condition {index + 1}</span>
                            <button
                              onClick={() => removeLogicCondition(currentLogicQuestion.id, condition.id)}
                              className="p-1 rounded hover:bg-red-500/10 text-[#F8FAFC]/40 hover:text-red-400 transition-all duration-300"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {/* Trigger Type */}
                            <div>
                              <label className="block text-xs text-[#F8FAFC]/60 mb-1">When answer</label>
                              <div className="relative">
                                <select 
                                  value={condition.trigger || 'equals'}
                                  onChange={(e) => updateLogicCondition(currentLogicQuestion.id, condition.id, 'trigger', e.target.value)}
                                  className="appearance-none w-full p-2 pr-8 text-xs border border-[#9767E4]/30 rounded-lg bg-[#0B111E]/90 backdrop-blur-md text-[#F8FAFC] focus:border-[#9767E4]/60 focus:outline-none focus:ring-1 focus:ring-[#9767E4]/40 cursor-pointer hover:border-[#9767E4]/50 hover:bg-[#0B111E]/95 transition-all duration-300"
                                  style={{
                                    backgroundImage: 'none',
                                    colorScheme: 'dark'
                                  }}
                                >
                                  <option value="equals" style={{backgroundColor: 'rgba(11, 17, 30, 0.95)', color: '#F8FAFC'}}>Equals</option>
                                  <option value="not_equals" style={{backgroundColor: 'rgba(11, 17, 30, 0.95)', color: '#F8FAFC'}}>Not equals</option>
                                  <option value="contains" style={{backgroundColor: 'rgba(11, 17, 30, 0.95)', color: '#F8FAFC'}}>Contains</option>
                                  <option value="greater_than" style={{backgroundColor: 'rgba(11, 17, 30, 0.95)', color: '#F8FAFC'}}>Greater than</option>
                                  <option value="less_than" style={{backgroundColor: 'rgba(11, 17, 30, 0.95)', color: '#F8FAFC'}}>Less than</option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-[#9767E4]/70 pointer-events-none" />
                              </div>
                            </div>

                            {/* Value */}
                            <div>
                              <label className="block text-xs text-[#F8FAFC]/60 mb-1">Value</label>
                              <input
                                type="text"
                                value={condition.value || ''}
                                onChange={(e) => updateLogicCondition(currentLogicQuestion.id, condition.id, 'value', e.target.value)}
                                placeholder="Enter value..."
                                className="w-full p-2 text-xs border border-[#9767E4]/20 rounded bg-[#0B111E]/40 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none"
                              />
                            </div>

                            {/* Action */}
                            <div>
                              <label className="block text-xs text-[#F8FAFC]/60 mb-1">Then</label>
                              <div className="relative">
                                <select 
                                  value={condition.action?.type || 'skip'}
                                  onChange={(e) => updateLogicConditionAction(currentLogicQuestion.id, condition.id, e.target.value, condition.action?.target || '1')}
                                  className="appearance-none w-full p-2 pr-8 text-xs border border-[#9767E4]/30 rounded-lg bg-[#0B111E]/90 backdrop-blur-md text-[#F8FAFC] focus:border-[#9767E4]/60 focus:outline-none focus:ring-1 focus:ring-[#9767E4]/40 cursor-pointer hover:border-[#9767E4]/50 hover:bg-[#0B111E]/95 transition-all duration-300"
                                  style={{
                                    backgroundImage: 'none',
                                    colorScheme: 'dark'
                                  }}
                                >
                                  <option value="skip" style={{backgroundColor: 'rgba(11, 17, 30, 0.95)', color: '#F8FAFC'}}>Skip questions</option>
                                  <option value="jump" style={{backgroundColor: 'rgba(11, 17, 30, 0.95)', color: '#F8FAFC'}}>Jump to page</option>
                                  <option value="end" style={{backgroundColor: 'rgba(11, 17, 30, 0.95)', color: '#F8FAFC'}}>End survey</option>
                                  <option value="show" style={{backgroundColor: 'rgba(11, 17, 30, 0.95)', color: '#F8FAFC'}}>Show message</option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-[#9767E4]/70 pointer-events-none" />
                              </div>
                            </div>
                          </div>

                          {/* Action Details */}
                          <div className="mt-3">
                            <label className="block text-xs text-[#F8FAFC]/60 mb-1">Action details</label>
                            <input
                              type="text"
                              value={condition.action?.target || ''}
                              onChange={(e) => updateLogicConditionAction(currentLogicQuestion.id, condition.id, condition.action?.type || 'skip', e.target.value)}
                              placeholder={
                                condition.action?.type === 'skip' ? 'Number of questions to skip (e.g., 2)' :
                                condition.action?.type === 'jump' ? 'Page number to jump to (e.g., 3)' :
                                condition.action?.type === 'show' ? 'Message to show' :
                                'Survey will end'
                              }
                              disabled={condition.action?.type === 'end'}
                              className="w-full p-2 text-xs border border-[#9767E4]/20 rounded bg-[#0B111E]/40 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Logic Examples */}
                <div className="border border-[#26B2F2]/20 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setShowLogicExamples(!showLogicExamples)}
                    className="w-full p-4 bg-[#26B2F2]/5 hover:bg-[#26B2F2]/10 transition-all duration-300 flex items-center justify-between"
                  >
                    <h5 className="text-xs font-medium text-[#26B2F2]">💡 Logic Examples</h5>
                    <ChevronDown 
                      className={`w-4 h-4 text-[#26B2F2] transition-transform duration-300 ${
                        showLogicExamples ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {showLogicExamples && (
                    <div className="p-4 bg-[#26B2F2]/5 border-t border-[#26B2F2]/20 animate-in slide-in-from-top duration-300">
                      <div className="space-y-2 text-xs text-[#F8FAFC]/60">
                        <div className="p-2 bg-[#0B111E]/20 rounded border-l-2 border-[#26B2F2]/30">
                          <p className="font-medium text-[#F8FAFC]/80 mb-1">Skip Logic:</p>
                          <p>If answer equals "No" → Skip next 2 questions</p>
                        </div>
                        <div className="p-2 bg-[#0B111E]/20 rounded border-l-2 border-[#9767E4]/30">
                          <p className="font-medium text-[#F8FAFC]/80 mb-1">Page Jump:</p>
                          <p>If answer equals "Advanced" → Jump to page 3</p>
                        </div>
                        <div className="p-2 bg-[#0B111E]/20 rounded border-l-2 border-red-400/30">
                          <p className="font-medium text-[#F8FAFC]/80 mb-1">Survey End:</p>
                          <p>If answer equals "Not interested" → End survey</p>
                        </div>
                        <div className="p-2 bg-[#0B111E]/20 rounded border-l-2 border-green-400/30">
                          <p className="font-medium text-[#F8FAFC]/80 mb-1">Show Message:</p>
                          <p>If answer contains "help" → Show "Contact support"</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-[#9767E4]/20">
              <button
                onClick={saveLogicModal}
                className="px-4 py-2 text-sm text-[#F8FAFC]/60 hover:text-[#F8FAFC] transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={saveLogicModal}
                className="px-4 py-2 bg-gradient-to-r from-[#9767E4] to-[#C084FC] text-white text-sm font-medium rounded-lg hover:from-[#8B5CF6] hover:to-[#A855F7] transition-all duration-300"
              >
                Save Logic
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Question Type Preview Tooltip */}
      {hoveredQuestionType && (
        <div 
          className="fixed z-[10000] pointer-events-none"
          style={{ 
            left: `${previewPosition.x}px`,
            top: `${previewPosition.y}px`,
            transform: 'translateY(-50%)'
          }}
        >
          <QuestionTypePreview questionType={hoveredQuestionType} />
        </div>
      )}
    </div>
  );
}
