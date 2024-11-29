// AnswerCountContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface AnswerCountContextType {
  answerCounts: Record<string, number>;
  incrementAnswerCount: (relatedField: string) => void;
}

export const AnswerCountContext = createContext<AnswerCountContextType | undefined>(undefined);

export const AnswerCountProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [answerCounts, setAnswerCounts] = useState<Record<string, number>>({});

  const incrementAnswerCount = (relatedField: string) => {
    setAnswerCounts((prevCounts) => ({
      ...prevCounts,
      [relatedField]: (prevCounts[relatedField] || 0) + 1,
    }));
  };

  return (
    <AnswerCountContext.Provider value={{ answerCounts, incrementAnswerCount }}>
      {children}
    </AnswerCountContext.Provider>
  );
};
