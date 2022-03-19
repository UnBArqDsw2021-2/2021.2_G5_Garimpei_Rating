import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateReportDto } from "./dto/create-report.dto";
import { ReportService } from "./report.service";

@Controller('report')
export class ReportController {
    constructor(private readonly reportService: ReportService) {}

    @Get()
    findAll() {
        return this.reportService.findAll();
    }

    @Get(':reportable_type/:reportable_id')
    findReportableReports(@Param('reportable_type') reportableType: string, @Param('reportable_id') reportableId: number) {
        return this.reportService.findReportableReports(reportableType, reportableId);
    }

    @Get(':reportable_type/:reportable_id/user/:user_id')
    findReportableReportsMadeByUser(@Param('reportable_type') reportableType: string, @Param('reportable_id') reportableId: number, @Param('user_id') userId: number) {
        return this.reportService.findReportableReportsMadeByUser(reportableType, reportableId, userId);
    }

    @Post()
    createReport(@Body() createReportDto: CreateReportDto) {
        return this.reportService.createReport(createReportDto);
    }
}