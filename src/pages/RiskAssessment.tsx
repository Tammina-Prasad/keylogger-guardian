import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: { text: string; risk: number }[];
}

const riskQuestions: Question[] = [
  {
    id: 1,
    question: "How often do you update your operating system?",
    options: [
      { text: "Automatically/Immediately", risk: 0 },
      { text: "Weekly", risk: 1 },
      { text: "Monthly", risk: 2 },
      { text: "Rarely/Never", risk: 4 }
    ]
  },
  {
    id: 2,
    question: "Do you use antivirus software?",
    options: [
      { text: "Yes, always updated", risk: 0 },
      { text: "Yes, but not always updated", risk: 2 },
      { text: "Sometimes", risk: 3 },
      { text: "No", risk: 4 }
    ]
  },
  {
    id: 3,
    question: "How do you handle email attachments?",
    options: [
      { text: "Scan all attachments before opening", risk: 0 },
      { text: "Only open from trusted sources", risk: 1 },
      { text: "Open most attachments", risk: 3 },
      { text: "Open all attachments", risk: 4 }
    ]
  },
  {
    id: 4,
    question: "What type of passwords do you use?",
    options: [
      { text: "Strong, unique passwords with 2FA", risk: 0 },
      { text: "Strong passwords, no 2FA", risk: 1 },
      { text: "Simple but different passwords", risk: 2 },
      { text: "Same password everywhere", risk: 4 }
    ]
  },
  {
    id: 5,
    question: "How often do you backup your data?",
    options: [
      { text: "Daily, automated backups", risk: 0 },
      { text: "Weekly backups", risk: 1 },
      { text: "Monthly backups", risk: 2 },
      { text: "Rarely or never", risk: 4 }
    ]
  }
];

export default function RiskAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = [...answers, riskQuestions[currentQuestion].options[selectedOption].risk];
      setAnswers(newAnswers);
      
      if (currentQuestion < riskQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }
  };

  const calculateRiskLevel = () => {
    const totalRisk = answers.reduce((sum, risk) => sum + risk, 0);
    const maxRisk = riskQuestions.length * 4;
    const riskPercentage = (totalRisk / maxRisk) * 100;
    
    if (riskPercentage <= 25) return { level: "Low", color: "text-green-400", icon: CheckCircle };
    if (riskPercentage <= 50) return { level: "Medium", color: "text-yellow-400", icon: AlertTriangle };
    return { level: "High", color: "text-red-400", icon: XCircle };
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResult(false);
  };

  const progress = ((currentQuestion + 1) / riskQuestions.length) * 100;

  if (showResult) {
    const risk = calculateRiskLevel();
    const RiskIcon = risk.icon;
    
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary mb-4">
                <Shield className="w-8 h-8 inline-block mr-2" />
                Risk Assessment Complete
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="space-y-4">
                <RiskIcon className={`w-24 h-24 mx-auto ${risk.color}`} />
                <h2 className={`text-4xl font-bold ${risk.color}`}>
                  {risk.level} Risk
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {risk.level === "Low" && "Great job! Your security practices are excellent. Keep up the good work!"}
                  {risk.level === "Medium" && "Your security is decent, but there's room for improvement. Consider strengthening some practices."}
                  {risk.level === "High" && "Your system is at high risk! Please review and improve your security practices immediately."}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <Card className="bg-muted/50">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold mb-2">Total Score</h3>
                    <p className="text-2xl font-bold text-primary">{answers.reduce((sum, risk) => sum + risk, 0)}/20</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold mb-2">Risk Level</h3>
                    <p className={`text-2xl font-bold ${risk.color}`}>{risk.level}</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold mb-2">Questions</h3>
                    <p className="text-2xl font-bold text-primary">{riskQuestions.length}/5</p>
                  </CardContent>
                </Card>
              </div>

              <Button onClick={resetQuiz} className="mt-6">
                Take Assessment Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-2xl font-bold text-primary">
                <Shield className="w-6 h-6 inline-block mr-2" />
                Security Risk Assessment
              </CardTitle>
              <span className="text-muted-foreground">
                {currentQuestion + 1} of {riskQuestions.length}
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">
                {riskQuestions[currentQuestion].question}
              </h2>
              
              <div className="space-y-3">
                {riskQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${
                      selectedOption === index
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-muted/30 hover:bg-muted/50 text-foreground"
                    }`}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end pt-4">
              <Button 
                onClick={handleNext}
                disabled={selectedOption === null}
                className="px-8"
              >
                {currentQuestion === riskQuestions.length - 1 ? "Finish Assessment" : "Next Question"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}