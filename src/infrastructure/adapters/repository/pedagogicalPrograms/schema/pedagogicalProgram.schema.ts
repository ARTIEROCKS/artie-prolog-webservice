import { Schema } from 'mongoose';

const PedagogicalProgramSchema = new Schema({
  institutionId: {
    type: String,
    required: true,
  },
  program: String,
});

export default PedagogicalProgramSchema;
