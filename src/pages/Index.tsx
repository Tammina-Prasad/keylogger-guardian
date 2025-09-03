import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Eye, Lock, AlertTriangle, RotateCcw, Zap, HelpCircle, BookOpen, Workflow, Info } from 'lucide-react';
import KeyloggerSimulation from '@/components/KeyloggerSimulation';
import SecurityQuiz from '@/components/SecurityQuiz';

const Index = () => {
  const sections = [
    {
      id: 'what-is',
      icon: Info,
      title: 'What is a Keylogger?',
      content: 'A keylogger is a malicious tool (software or hardware) that records user keystrokes without their knowledge. Attackers use keyloggers to steal sensitive information like passwords, credit card numbers, and personal data.'
    },
    {
      id: 'spread',
      icon: Zap,
      title: 'How It Spreads',
      content: 'Keyloggers spread through various attack vectors:',
      list: [
        'Phishing emails with malicious attachments',
        'Infected USB drives and removable media',
        'Malicious downloads or cracked software',
        'Drive-by website infections',
        'Social engineering attacks'
      ]
    },
    {
      id: 'encryption',
      icon: Lock,
      title: 'Encryption Concept',
      content: 'Encryption converts readable data into unreadable ciphertext. Even if a keylogger captures keystrokes, strong encryption ensures that attackers cannot easily access the original information without the decryption key.'
    },
    {
      id: 'prevention',
      icon: Shield,
      title: 'Prevention Strategies',
      content: 'Protect yourself with these security measures:',
      list: [
        'Keep operating system and antivirus software updated',
        'Use two-factor authentication (2FA) wherever possible',
        'Avoid suspicious links and downloads',
        'Regularly inspect USB ports for unknown hardware devices',
        'Use virtual keyboards for sensitive input',
        'Enable real-time protection in antivirus software'
      ]
    },
    {
      id: 'recovery',
      icon: RotateCcw,
      title: 'Recovery Steps',
      content: 'If you suspect keylogger infection:',
      list: [
        'Immediately disconnect from the internet',
        'Run comprehensive antivirus and anti-malware scans',
        'Change all passwords from a clean, trusted device',
        'Check bank and credit card statements for unauthorized activity',
        'Restore system from clean backups if available',
        'Consider professional cybersecurity assistance'
      ]
    },
    {
      id: 'risks',
      icon: AlertTriangle,
      title: 'Risk Assessment',
      content: 'Keyloggers pose significant security risks:',
      list: [
        'Identity theft and financial fraud',
        'Corporate espionage and data breaches',
        'Unauthorized access to personal accounts',
        'Privacy violations and surveillance',
        'Intellectual property theft'
      ]
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
        {/* Main Content Sections */}
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="scroll-mt-20">
            <Card className="p-8 bg-cyber-bg-section border-cyber-border shadow-cyber">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-2 border-primary/30 text-primary">
                    {index + 1}
                  </Badge>
                  <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                {section.list && (
                  <ul className="space-y-2">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Card>
          </section>
        ))}

        {/* Interactive Simulation */}
        <section id="simulation" className="scroll-mt-20">
          <Card className="p-8 bg-cyber-bg-section border-cyber-border shadow-cyber">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div>
                <Badge variant="outline" className="mb-2 border-primary/30 text-primary">
                  6
                </Badge>
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
              <Badge variant="outline" className="mb-2 border-primary/30 text-primary">
                7
              </Badge>
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
                <Badge variant="outline" className="mb-2 border-primary/30 text-primary">
                  8
                </Badge>
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

        {/* Workflow Information */}
        <section id="workflow" className="scroll-mt-20">
          <Card className="p-8 bg-cyber-bg-section border-cyber-border shadow-cyber">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Workflow className="h-6 w-6 text-primary" />
              </div>
              <div>
                <Badge variant="outline" className="mb-2 border-primary/30 text-primary">
                  9
                </Badge>
                <h2 className="text-2xl font-bold text-foreground">Keylogger Attack Workflow</h2>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground">
                Understanding how keylogger attacks work helps in developing better defense strategies:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-gradient-to-br from-destructive/10 to-background border border-destructive/20 rounded-lg">
                  <h4 className="font-semibold text-destructive mb-2">1. Initial Infection</h4>
                  <p className="text-sm text-muted-foreground">Malware delivery through phishing, infected media, or drive-by downloads</p>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-yellow-500/10 to-background border border-yellow-500/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-400 mb-2">2. Silent Installation</h4>
                  <p className="text-sm text-muted-foreground">Keylogger installs and runs hidden in the background, avoiding detection</p>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-primary/10 to-background border border-primary/20 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">3. Data Exfiltration</h4>
                  <p className="text-sm text-muted-foreground">Captured keystrokes are transmitted to attackers for malicious use</p>
                </div>
              </div>
            </div>
          </Card>
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