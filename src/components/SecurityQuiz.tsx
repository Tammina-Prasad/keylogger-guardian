import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';

const quizQuestions = [
  {
    question: "Which of the following is a way keyloggers spread?",
    options: ["Phishing emails", "Antivirus updates", "Using strong passwords", "Two-factor authentication"],
    correct: 0,
    explanation: "Keyloggers commonly spread through phishing emails containing malicious attachments."
  },
  {
    question: "What is the best way to detect a software keylogger?",
    options: ["Task Manager", "Checking USB ports", "Looking at website colors", "Restarting the PC"],
    correct: 0,
    explanation: "Task Manager can help identify suspicious processes that might be keyloggers running in the background."
  },
  {
    question: "Which method provides the best protection against keyloggers?",
    options: ["Using virtual keyboards", "Two-factor authentication", "Changing passwords daily", "Using longer passwords"],
    correct: 1,
    explanation: "Two-factor authentication provides an additional security layer even if passwords are compromised."
  }
];

const SecurityQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (optionIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(optionIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <Card className="p-6 bg-cyber-bg-section border-cyber-border shadow-cyber">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Quiz Complete! 🎉</h3>
          <div className="text-3xl font-bold mb-4">
            Score: {score}/{quizQuestions.length}
          </div>
          <p className="text-muted-foreground mb-6">
            {score === quizQuestions.length 
              ? "Perfect! You're well-prepared to defend against keyloggers!"
              : score >= quizQuestions.length / 2
              ? "Good job! Consider reviewing the security concepts to improve further."
              : "Keep learning! Cybersecurity knowledge is crucial for staying safe online."
            }
          </p>
          <Button onClick={resetQuiz} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Take Quiz Again
          </Button>
        </div>
      </Card>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <Card className="p-6 bg-cyber-bg-section border-cyber-border shadow-cyber">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-primary">Security Quiz</h3>
        <span className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {quizQuestions.length}
        </span>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium mb-4">{question.question}</h4>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full p-3 text-left rounded-lg border transition-all duration-200 ${
                showResult
                  ? index === question.correct
                    ? 'bg-green-500/20 border-green-500 text-green-400'
                    : selectedAnswer === index && index !== question.correct
                    ? 'bg-destructive/20 border-destructive text-destructive'
                    : 'bg-muted border-cyber-border'
                  : selectedAnswer === index
                  ? 'bg-primary/20 border-primary text-primary'
                  : 'bg-muted border-cyber-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm">
                  {String.fromCharCode(65 + index)})
                </span>
                <span>{option}</span>
                {showResult && index === question.correct && (
                  <CheckCircle className="ml-auto h-5 w-5 text-green-400" />
                )}
                {showResult && selectedAnswer === index && index !== question.correct && (
                  <XCircle className="ml-auto h-5 w-5 text-destructive" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {showResult && (
        <div className="mb-4 p-4 bg-background border border-cyber-border rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Explanation:</strong> {question.explanation}
          </p>
        </div>
      )}

      <div className="flex justify-between">
        <div className="text-sm text-muted-foreground">
          Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
        </div>
        <div className="space-x-2">
          {!showResult ? (
            <Button 
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Submit Answer
            </Button>
          ) : (
            <Button 
              onClick={handleNext}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'View Results'}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default SecurityQuiz;