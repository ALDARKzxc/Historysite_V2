// Hand-written types for the Supabase schema (see supabase/schema.sql).
// Regenerate with `npm run types:supabase` once the project id is configured.

export interface ProfileRow {
  id: string;
  username: string;
  xp: number;
  streak: number;
  completed_topics: string[];
  quiz_attempts: Record<string, number>;
  created_at: string;
  updated_at: string;
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: ProfileRow;
        Insert: {
          id: string;
          username?: string;
          xp?: number;
          streak?: number;
          completed_topics?: string[];
          quiz_attempts?: Record<string, number>;
        };
        Update: {
          username?: string;
          xp?: number;
          streak?: number;
          completed_topics?: string[];
          quiz_attempts?: Record<string, number>;
          updated_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
