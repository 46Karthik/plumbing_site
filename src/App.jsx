import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Home from "./home/Home";
import Aboutus from "./about/Aboutus";
import AllProjects from "./pages/AllProjects";
import { Route, Routes } from "react-router-dom";
import ProjectSectorial from "./projectsectorial/ProjectSectorial";
import DesignConsultingService from "./servicedesginandconsulting/DesignConsultingService";
import InstallationCommisioningService from "./serviceinstallationandcommisioning/InstallationCommisioningService";
import PanelBoardControlSystem from "./servicepanelboardcontrolsystem/PanelBoardControlSystem";
import ApprovalComplianceService from "./serviceapprovalcompliance/ApprovalComplianceService";
import MaintenaceRepairService from "./servicemaintenancerepair/MaintenaceRepairService";
import ValueAddedService from "./servicevalueaddedservice/ValueAddedService";
import Enquire from "./enquire/Enquire";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Career from "./career/Career";

export default function App() {
  return (
    <>
      <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services-design-consulting" element={<DesignConsultingService />} />
        <Route path="/services-installation-commisioning" element={<InstallationCommisioningService />} />
        <Route path="/services-panelboard-control-systems" element={<PanelBoardControlSystem />} />
        <Route path="/services-statutory-approvals" element={<ApprovalComplianceService />} />
        <Route path="/services-maintenance-repairs" element={<MaintenaceRepairService />} />
        <Route path="/services-valueadded" element={<ValueAddedService />} />
        <Route path="/portfolio-projects" element={<ProjectSectorial />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/contactus" element={<Enquire />} />
        <Route path="/careers" element={<Career />} />
      </Routes>
      <ScrollToTop />
    </HelmetProvider>
    </>
  );
}
