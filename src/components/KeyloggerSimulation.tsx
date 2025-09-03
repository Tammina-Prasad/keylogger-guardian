import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const KeyloggerSimulation = () => {
  const [userInput, setUserInput] = useState('');
  const [loggedKeys, setLoggedKeys] = useState<string[]>([]);

  useEffect(() => {
    if (userInput) {
      const timestamp = new Date().toLocaleTimeString();
      setLoggedKeys(prev => [...prev, `[${timestamp}] ${userInput.slice(-1)}`]);
    }
  }, [userInput]);

  const clearLogs = () => {
    setLoggedKeys([]);
    setUserInput('');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6 bg-cyber-bg-section border-cyber-border shadow-cyber">
        <h3 className="text-xl font-semibold text-primary mb-4">👤 User's View</h3>
        <Textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type something here..."
          className="min-h-32 bg-background border-cyber-border focus:ring-primary"
        />
        <p className="text-sm text-muted-foreground mt-2">
          This is what you see when typing normally
        </p>
      </Card>

      <Card className="p-6 bg-cyber-bg-section border-cyber-border shadow-cyber">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-destructive">🕵️ Hacker's View</h3>
          <button
            onClick={clearLogs}
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Clear Logs
          </button>
        </div>
        <div className="bg-background border border-cyber-border rounded-md p-4 min-h-32 font-mono text-sm">
          {loggedKeys.length === 0 ? (
            <span className="text-muted-foreground">[Keystrokes will appear here]</span>
          ) : (
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {loggedKeys.map((log, index) => (
                <div key={index} className="text-destructive">
                  {log}
                </div>
              ))}
            </div>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          This shows how keyloggers capture every keystroke
        </p>
      </Card>
    </div>
  );
};

export default KeyloggerSimulation;