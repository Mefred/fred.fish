export type QuestionType = "single" | "multiple" | "true-false" | "fill" | "matching" | "ordering" | "scenario";
export type Difficulty = 1 | 2 | 3 | 4 | 5;

export interface LearningQuestion {
  id: string;
  subject: string;
  lessonId: string;
  prompt: string;
  type: QuestionType;
  difficulty: Difficulty;
  concepts: string[];
  choices?: { id: string; text: string }[];
  items?: { id: string; text: string }[];
  matchOptions?: { id: string; text: string }[];
  pairs?: { id: string; prompt: string; answerId: string }[];
  answer: string | string[];
  explanation: string;
  distractorExplanations?: Record<string, string>;
  sourceRefs: string[];
  origin: "source" | "ai-generated";
}

export interface ConceptProgress {
  conceptId: string;
  attempts: number;
  correct: number;
  streak: number;
  mastery: number;
  lastReviewedAt: number | null;
  dueAt: number;
  recentResults: boolean[];
}

export interface LearningProgress {
  version: 1;
  xp: number;
  streakDays: number;
  lastPracticeDate: string | null;
  totalSessions: number;
  totalAnswers: number;
  totalCorrect: number;
  recentQuestionIds: string[];
  concepts: Record<string, ConceptProgress>;
  history: { id: string; date: number; correct: number; total: number; xp: number }[];
}

export interface QuizAnswer {
  questionId: string;
  selected: string | string[];
  correct: boolean;
  answeredAt: number;
}
