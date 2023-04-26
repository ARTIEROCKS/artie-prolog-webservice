import { Document } from 'mongoose';

export interface PedagogicalProgramEntity extends Document {
  institutionId: string;
  program: string;
}
