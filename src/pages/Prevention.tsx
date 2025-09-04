import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, ArrowLeft, Lock, RefreshCw, Eye, Smartphone, Network, HardDrive } from 'lucide-react';
import { Link } from 'react-router-dom';

const Prevention = () => {
  const preventionStrategies = [
    {
      icon: RefreshCw,
      title: 'Keep Software Updated',
      description: 'Regularly update operating system, antivirus software, and all applications to patch security vulnerabilities.',
      priority: 'Critical'
    },
    {
      icon: Lock,
      title: 'Use Two-Factor Authentication',
      description: 'Enable 2FA on all accounts to add an extra layer of security even if passwords are compromised.',
      priority: 'High'
    },
    {
      icon: Eye,
      title: 'Real-time Protection',
      description: 'Enable real-time scanning in antivirus software to detect and block keyloggers before installation.',
      priority: 'Critical'
    },
    {
      icon: Smartphone,
      title: 'Virtual Keyboards',
      description: 'Use on-screen virtual keyboards for sensitive input like passwords and financial information.',
      priority: 'Medium'
    },
    {
      icon: Network,
      title: 'Secure Networks',
      description: 'Avoid public Wi-Fi for sensitive activities and use VPN when connecting to untrusted networks.',
      priority: 'High'
    },
    {
      icon: HardDrive,
      title: 'Hardware Inspection',
      description: 'Regularly check USB ports and keyboard connections for unknown or suspicious hardware devices.',
      priority: 'Medium'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-500/20 text-red-300 border-red-500/50';
      case 'High': return 'bg-orange-500/20 text-orange-300 border-orange-500/50';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50';
      case 'Low': return 'bg-green-500/20 text-green-300 border-green-500/50';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/50';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-cyber border-b border-cyber-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Hub</span>
            </Link>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-12 w-12 text-primary animate-pulse-glow" />
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
                Prevention Strategies
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential security measures to protect yourself from keylogger attacks
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Prevention Methods Grid */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Security Measures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preventionStrategies.map((strategy, index) => (
              <Card key={index} className="p-6 bg-cyber-bg-section border-cyber-border shadow-cyber hover:shadow-cyber-glow transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <strategy.icon className="h-8 w-8 text-primary" />
                    <Badge className={`${getPriorityColor(strategy.priority)} border`}>
                      {strategy.priority}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{strategy.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">{strategy.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <Card className="p-8 bg-cyber-bg-section border-cyber-border shadow-cyber">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Daily Security Habits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground text-lg">Password Security</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Use unique, complex passwords for each account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Consider using a password manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Change passwords regularly, especially after breaches</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground text-lg">Browsing Safety</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Verify website authenticity before entering data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Look for HTTPS encryption on sensitive sites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Avoid downloading software from unknown sources</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Emergency Response */}
        <section>
          <Alert className="border-blue-500/50 bg-blue-500/10">
            <Shield className="h-4 w-4 text-blue-500" />
            <AlertDescription className="text-blue-200">
              <strong>Remember:</strong> Prevention is always better than recovery. Implementing these security measures 
              significantly reduces your risk of keylogger infections and data theft.
            </AlertDescription>
          </Alert>
        </section>
      </div>
    </div>
  );
};

export default Prevention;