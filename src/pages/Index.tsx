import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Eye, Lock, AlertTriangle, RotateCcw, Zap, HelpCircle, BookOpen, Workflow, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import KeyloggerSimulation from '@/components/KeyloggerSimulation';
import SecurityQuiz from '@/components/SecurityQuiz';

const Index = () => {
  const mainSections = [
    {
      id: 'what-is',
      icon: Info,
      title: 'What is a Keylogger?',
      description: 'Learn about keylogger fundamentals and various types',
      link: '/what-is-keylogger'
    },
    {
      id: 'spread',
      icon: Zap,
      title: 'How It Spreads',
      description: 'Common distribution methods and attack vectors',
      link: '/how-it-spreads'
    },
    {
      id: 'prevention',
      icon: Shield,
      title: 'Prevention Strategies',
      description: 'Essential security measures and best practices',
      link: '/prevention'
    },
    {
      id: 'recovery',
      icon: RotateCcw,
      title: 'Recovery Steps',
      description: 'Actions to take if you suspect infection',
      link: '/recovery'
    },
    {
      id: 'risks',
      icon: AlertTriangle,
      title: 'Risk Assessment',
      description: 'Understanding the dangers and consequences',
      link: '#risk'
    },
    {
      id: 'encryption',
      icon: Lock,
      title: 'Encryption Concept',
      description: 'How encryption protects against keyloggers',
      link: '#encryption'
    }
  ];

  const glossaryTerms = [
    { term: 'Keylogger', definition: 'Software or hardware that records keystrokes' },
    { term: 'Phishing', definition: 'Fraudulent communication designed to steal sensitive information' },
    { term: 'Encryption', definition: 'Process of converting data into unreadable format for security' },
    { term: '2FA', definition: 'Two-Factor Authentication - additional security verification step' },
    { term: 'Malware', definition: 'Malicious software designed to damage or gain unauthorized access' },
    { term: 'Social Engineering', definition: 'Psychological manipulation to divulge confidential information' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-cyber border-b border-cyber-border">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-12 w-12 text-primary animate-pulse-glow" />
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
                Keylogger Awareness Hub
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about keyloggers, their risks, prevention strategies, and recovery methods through interactive educational content
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Main Navigation Cards */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Explore Keylogger Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainSections.map((section, index) => (
              <Link key={section.id} to={section.link}>
                <Card className="p-6 bg-cyber-bg-section border-cyber-border shadow-cyber hover:shadow-cyber-glow transition-all duration-300 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                        <section.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{section.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">{section.description}</p>
                    <div className="mt-4 text-primary hover:text-primary/80 font-medium">
                      Learn More →
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Additional Sections */}
        <section id="encryption" className="scroll-mt-20">
          <Card className="p-8 bg-cyber-bg-section border-cyber-border shadow-cyber">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Encryption Concept</h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Encryption converts readable data into unreadable ciphertext. Even if a keylogger captures keystrokes, 
                strong encryption ensures that attackers cannot easily access the original information without the decryption key.
              </p>
            </div>
          </Card>
        </section>

        <section id="risk" className="scroll-mt-20">
          <Card className="p-8 bg-cyber-bg-section border-cyber-border shadow-cyber">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Risk Assessment</h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">Keyloggers pose significant security risks:</p>
              <ul className="space-y-2">
                {['Identity theft and financial fraud', 'Corporate espionage and data breaches', 'Unauthorized access to personal accounts', 'Privacy violations and surveillance', 'Intellectual property theft'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </section>

        {/* Interactive Simulation */}
        <section id="simulation" className="scroll-mt-20">
          <Card className="p-8 bg-cyber-bg-section border-cyber-border shadow-cyber">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Simulate Attack (Educational Only)</h2>
              </div>
            </div>
            
            <Alert className="mb-6 border-yellow-500/50 bg-yellow-500/10">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              <AlertDescription className="text-yellow-200">
                This is a safe educational simulation. No real keylogger software is used or installed on your device.
              </AlertDescription>
            </Alert>

            <p className="text-muted-foreground mb-6">
              This demo shows how a keylogger attack might work. The left side shows the user's normal typing experience, 
              while the right side demonstrates how malicious software could secretly log keystrokes.
            </p>

            <KeyloggerSimulation />
          </Card>
        </section>

        {/* Security Quiz */}
        <section id="quiz" className="scroll-mt-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Security Knowledge Quiz</h2>
            </div>
          </div>
          <SecurityQuiz />
        </section>

        {/* Glossary */}
        <section id="glossary" className="scroll-mt-20">
          <Card className="p-8 bg-cyber-bg-section border-cyber-border shadow-cyber">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Security Glossary</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {glossaryTerms.map((item, index) => (
                <div key={index} className="p-4 bg-background border border-cyber-border rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">{item.term}</h4>
                  <p className="text-sm text-muted-foreground">{item.definition}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Keylogger Flowchart */}
        <section id="flowchart" className="scroll-mt-20 text-center py-16">
          <div className="bg-cyber-bg-section rounded-2xl p-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Keylogger Flowchart
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
              This flowchart illustrates the lifecycle of a keylogger — from listening to keystrokes, 
              to storing them, and finally writing them into a log file.  
              (For awareness & educational purposes 💡)
            </p>
            
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/1098d373-a9eb-4b2e-8a9b-532e6d134a8e.png" 
                alt="Keylogger Flowchart Process - Complete Workflow" 
                className="max-w-4xl w-full rounded-3xl shadow-cyber border border-primary/20"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-cyber-bg-section border-t border-cyber-border py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <Alert className="max-w-2xl mx-auto border-yellow-500/50 bg-yellow-500/10">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            <AlertDescription className="text-yellow-200">
              <strong>Educational Disclaimer:</strong> This website is designed for educational purposes only. 
              No actual keyloggers are used or distributed. All simulations are safe and contained within this application.
            </AlertDescription>
          </Alert>
        </div>
      </footer>
    </div>
  );
};

export default Index;