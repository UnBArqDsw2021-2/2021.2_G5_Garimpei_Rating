import { BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateReportDto } from "./dto/create-report.dto";
import { Report } from "./entities/report.entity";

export class ReportService {
    constructor(
        @InjectRepository(Report)
        private reportRepository: Repository<Report>,
    ) {}

    async findAll() {
        return this.reportRepository.find();
    }

    async findReportableReports(reportableType: string, reportableId: number) {
        return this.reportRepository.find({ where: { reportableType: reportableType, reportableId: reportableId } });
    }

    async findReportableReportsMadeByUser(reportableType: string, reportableId: number, userId: number) {
        return this.reportRepository.find({ where: { reportableType: reportableType, reportableId: reportableId, userId: userId } });
    }

    async createReport(createReportDto: CreateReportDto) {
        const report = await this.reportRepository.findOne({
            userId: createReportDto.userId,
            reportableId: createReportDto.reportableId,
            reportableType: createReportDto.reportableType
        });
        if (report) {
            throw new BadRequestException(`A report with userId: ${createReportDto.userId}, reportableId: ${createReportDto.reportableId} and reportableType: ${createReportDto.reportableType} already exists`)
        }
        return this.reportRepository.save(createReportDto);
    }
}