import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import PedagogicalProgram from '../../../../domain/models/pedagogicalProgram.model';
import { PedagogicalProgramEntity } from '../../../adapters/respository/pedagogicalPrograms/entity/pedagogicalProgram.entity';
import { Optional } from 'typescript-optional';
import PedagogicalProgramMapper from '../../../mapper/pedagogicalProgram.mapper';
import { PedagogicalProgramRepository } from '../../../../domain/ports/pedagogicalProgram.repository';

@Injectable()
export default class PedagogicalProgramRepositoryMongo
  implements PedagogicalProgramRepository
{
  constructor(
    @InjectModel('PedagogicalProgram')
    private readonly pedagogicalProgramModel: Model<PedagogicalProgramEntity>,
  ) {}

  public async getPedagogicalProgramByInstitutionId(
    institutionId: string,
  ): Promise<Optional<PedagogicalProgram>> {
    const pedagogicalProgram = await this.pedagogicalProgramModel.find({
      institutionId: institutionId,
    });
    return PedagogicalProgramMapper.toDomain(pedagogicalProgram);
  }
}
