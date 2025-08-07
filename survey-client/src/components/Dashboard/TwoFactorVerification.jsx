import React, { useState } from "react";
import { FaChevronLeft, FaShieldAlt, FaMobile, FaQrcode, FaKey, FaCopy, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TwoFactorVerification = () => {
  const navigate = useNavigate();
  const [enabled, setEnabled] = useState(false);
  const [step, setStep] = useState(1);
  const [verificationCode, setVerificationCode] = useState("");
  const [backupCodes] = useState([
    "A1B2C3D4", "E5F6G7H8", "I9J0K1L2", 
    "M3N4O5P6", "Q7R8S9T0", "U1V2W3X4"
  ]);
  const [copied, setCopied] = useState(false);
  const secretKey = "JBSWY3DPEHPK3PXP";

  const handleCopySecret = () => {
    navigator.clipboard.writeText(secretKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEnable2FA = () => {
    if (!enabled) {
      setStep(1);
    } else {
      setEnabled(false);
      setStep(1);
    }
  };

  const handleVerifyCode = () => {
    if (verificationCode.length === 6) {
      setEnabled(true);
      setStep(1);
      setVerificationCode("");
    }
  };

  return (
    <div className="px-4 py-5 sm:px-6 md:py-8 w-full max-w-full bg-[#0E1525]/50 backdrop-blur-sm border border-[#9767E4]/10 rounded-2xl flex flex-col gap-6">
      <div className="flex items-center gap-4 mb-6">
        <button className="bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/20 rounded-full p-2 border border-[#9767E4]/30 flex items-center justify-center hover:from-[#9767E4]/30 hover:to-[#26B2F2]/30 transition-all duration-300" onClick={() => navigate(-1)}>
          <FaChevronLeft className="text-[#9767E4] text-lg" />
        </button>
        <h1 className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-[#9767E4] via-[#C084FC] to-[#26B2F2] bg-clip-text text-transparent">Two Factor Authentication</h1>
      </div>

      <div className="bg-gradient-to-br from-[#26B2F2]/10 to-[#9767E4]/5 border border-[#26B2F2]/30 rounded-xl p-4 backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <FaShieldAlt className="text-[#26B2F2] text-lg mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-[#26B2F2] mb-1">Enhanced Security</h3>
            <p className="text-[#F8FAFC]/70 text-sm">
              Two-factor authentication adds an extra layer of security to your account by requiring a verification code from your mobile device.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-[#0E1525]/60 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-6 border border-[#9767E4]/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`rounded-full p-3 ${enabled ? 'bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30' : 'bg-gradient-to-r from-[#9767E4]/20 to-[#26B2F2]/10 border border-[#9767E4]/30'}`}>
              <FaShieldAlt className={`text-lg ${enabled ? 'text-green-400' : 'text-[#9767E4]'}`} />
            </div>
            <div>
              <h3 className="font-semibold text-[#F8FAFC]">Two Factor Authentication</h3>
              <p className="text-[#F8FAFC]/60 text-sm">
                {enabled ? 'Currently enabled and protecting your account' : 'Add an extra layer of security'}
              </p>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
            enabled 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : 'bg-red-500/20 text-red-400 border border-red-500/30'
          }`}>
            {enabled ? 'Enabled' : 'Disabled'}
          </div>
        </div>

        {!enabled && step === 1 && (
          <div className="space-y-4">
            <div className="text-center">
              <button 
                className="bg-gradient-to-r from-[#9767E4] to-[#26B2F2] text-white rounded-full px-8 py-3 font-semibold hover:from-[#9767E4]/90 hover:to-[#26B2F2]/90 transition-all duration-300 shadow-lg shadow-[#9767E4]/20"
                onClick={() => setStep(2)}
              >
                Set Up 2FA
              </button>
            </div>
          </div>
        )}

        {!enabled && step === 2 && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="font-semibold text-[#F8FAFC] mb-4">Step 1: Install Authenticator App</h3>
              <p className="text-[#F8FAFC]/70 text-sm mb-4">
                Download an authenticator app like Google Authenticator, Authy, or Microsoft Authenticator
              </p>
              <button 
                className="bg-gradient-to-r from-[#26B2F2] to-[#9767E4] text-white rounded-full px-6 py-2 text-sm font-semibold hover:from-[#26B2F2]/90 hover:to-[#9767E4]/90 transition-all duration-300"
                onClick={() => setStep(3)}
              >
                I have an authenticator app
              </button>
            </div>
          </div>
        )}

        {!enabled && step === 3 && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="font-semibold text-[#F8FAFC] mb-4">Step 2: Scan QR Code or Enter Secret</h3>
              
              <div className="bg-white p-4 rounded-xl inline-block mb-4">
                <div className="w-32 h-32 bg-gray-200 rounded flex items-center justify-center">
                  <FaQrcode className="text-4xl text-gray-400" />
                </div>
              </div>
              
              <div className="bg-[#0E1525]/40 border border-[#9767E4]/30 rounded-xl p-4">
                <p className="text-[#F8FAFC]/70 text-sm mb-2">Or enter this secret key manually:</p>
                <div className="flex items-center gap-2 justify-center">
                  <code className="bg-[#0E1525]/60 px-3 py-2 rounded text-[#26B2F2] font-mono text-sm">{secretKey}</code>
                  <button 
                    onClick={handleCopySecret}
                    className="bg-[#9767E4]/20 hover:bg-[#9767E4]/30 p-2 rounded transition-all duration-300"
                  >
                    {copied ? <FaCheck className="text-green-400" /> : <FaCopy className="text-[#9767E4]" />}
                  </button>
                </div>
              </div>
              
              <button 
                className="bg-gradient-to-r from-[#26B2F2] to-[#9767E4] text-white rounded-full px-6 py-2 text-sm font-semibold hover:from-[#26B2F2]/90 hover:to-[#9767E4]/90 transition-all duration-300 mt-4"
                onClick={() => setStep(4)}
              >
                I've added the account
              </button>
            </div>
          </div>
        )}

        {!enabled && step === 4 && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="font-semibold text-[#F8FAFC] mb-4">Step 3: Verify Setup</h3>
              <p className="text-[#F8FAFC]/70 text-sm mb-4">
                Enter the 6-digit code from your authenticator app
              </p>
              
              <div className="max-w-xs mx-auto">
                <input 
                  type="text" 
                  className="bg-[#0E1525]/40 border border-[#9767E4]/30 rounded-xl px-4 py-3 text-[#F8FAFC] placeholder-[#F8FAFC]/40 focus:border-[#9767E4]/60 focus:ring-0 focus:outline-none transition-all duration-300 w-full text-center font-mono text-lg"
                  value={verificationCode} 
                  onChange={e => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))} 
                  placeholder="000000"
                  maxLength={6}
                />
              </div>
              
              <div className="flex gap-3 justify-center mt-4">
                <button 
                  className="bg-gradient-to-r from-[#9767E4] to-[#26B2F2] text-white rounded-full px-6 py-2 font-semibold hover:from-[#9767E4]/90 hover:to-[#26B2F2]/90 transition-all duration-300 disabled:opacity-50"
                  onClick={handleVerifyCode}
                  disabled={verificationCode.length !== 6}
                >
                  Verify & Enable
                </button>
                <button 
                  className="bg-[#0E1525]/40 border border-[#9767E4]/30 text-[#F8FAFC]/70 rounded-full px-6 py-2 font-semibold hover:bg-[#0E1525]/60 transition-all duration-300"
                  onClick={() => setStep(1)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {enabled && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <FaCheck className="text-green-400" />
                <span className="font-semibold text-green-400">2FA is Active</span>
              </div>
              <p className="text-[#F8FAFC]/70 text-sm">
                Your account is protected with two-factor authentication. You'll need your authenticator app to sign in.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-[#F8FAFC] flex items-center gap-2">
                <FaKey className="text-[#C084FC]" />
                Backup Recovery Codes
              </h4>
              <p className="text-[#F8FAFC]/60 text-sm">
                Save these backup codes in a safe place. You can use them to access your account if you lose your phone.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {backupCodes.map((code, index) => (
                  <div key={index} className="bg-[#0E1525]/40 border border-[#9767E4]/20 rounded-lg p-2 text-center font-mono text-sm text-[#F8FAFC]">
                    {code}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full px-6 py-2 font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300"
                onClick={handleEnable2FA}
              >
                Disable 2FA
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TwoFactorVerification;
