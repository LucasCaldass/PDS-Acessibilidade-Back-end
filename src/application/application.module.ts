import { Module } from "@nestjs/common";
import { CreateVagaUseCase } from "./usecases/vagas/create-vaga.usecase";
import { DomainModule } from "src/domain/domain.module";
import { IVagasRepository } from "./repositories/vagas.repository";
import { VagasRepositoryAdapter } from "src/infrastructure/adapters/vagas.repository.adapter";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VagaEntity } from "src/infrastructure/data/entities/vaga.entity";
import { ListAllVagasUseCase } from './usecases/vagas/list-all-vagas.usecase';
import { FindVagaByIdUseCase } from './usecases/vagas/find-vaga-by-id.usecase';
import { DeleteVagaByIdUseCase } from './usecases/vagas/delete-vaga-by-id.usecase';

@Module({
  imports: [DomainModule, TypeOrmModule.forFeature([VagaEntity])],
  providers: [
    CreateVagaUseCase,
    ListAllVagasUseCase,
    FindVagaByIdUseCase,
    DeleteVagaByIdUseCase,
    { provide: IVagasRepository, useClass: VagasRepositoryAdapter }
  ],
  exports: [
    CreateVagaUseCase,
    ListAllVagasUseCase,
    FindVagaByIdUseCase,
    DeleteVagaByIdUseCase
  ]
})
export class ApplicationModule { }
