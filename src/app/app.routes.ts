import { Routes } from '@angular/router';

// pages
import { Home } from './components/home/home';
import { Blog } from './components/blog/blog';

// blogs
import { CompendiumOfBitwiseNomenclatureFromApplicationsToCybersecurity } from './blogs/compendium-of-bitwise-nomenclature-from-applications-to-cybersecurity/compendium-of-bitwise-nomenclature-from-applications-to-cybersecurity';
import { ComputingAndSecureWorkHabitsForSoftwareDevelopment } from './blogs/computing-and-secure-work-habits-for-software-development/computing-and-secure-work-habits-for-software-development';
import { StatefulReactJavascriptFormFieldsThroughReduxDataPersistenceAndManagement } from './blogs/stateful-react-javascript-form-fields-through-redux-data-persistence-and-management/stateful-react-javascript-form-fields-through-redux-data-persistence-and-management';
import { CodingHabitsAndMacLocalEnvironmentsForSoftwareDevelopment } from './blogs/coding-habits-and-mac-local-environments-for-software-development/coding-habits-and-mac-local-environments-for-software-development';
import { LayeredCybersecurityApproachesForFinancialTechnologyFintech } from './blogs/layered-cybersecurity-approaches-for-financial-technology-fintech/layered-cybersecurity-approaches-for-financial-technology-fintech';
import { ThreatDetectionApproachesForFinancialTechnologyFintech } from './blogs/threat-detection-approaches-for-financial-technology-fintech/threat-detection-approaches-for-financial-technology-fintech';
import { SecureSoftwareDevelopmentAndThreatModelingApproachesForFinancialTechnologyFintech } from './blogs/secure-software-development-and-threat-modeling-approaches-for-financial-technology-fintech/secure-software-development-and-threat-modeling-approaches-for-financial-technology-fintech';
import { GlobalInformationSecurityAndInfrastructureApproachesForFinancialTechnologyFintech } from './blogs/global-information-security-and-infrastructure-approaches-for-financial-technology-fintech/global-information-security-and-infrastructure-approaches-for-financial-technology-fintech';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: Blog },
  {
    path: 'blog/compendium-of-bitwise-nomenclature-from-applications-to-cybersecurity',
    component: CompendiumOfBitwiseNomenclatureFromApplicationsToCybersecurity,
  },
  {
    path: 'blog/computing-and-secure-work-habits-for-software-development',
    component: ComputingAndSecureWorkHabitsForSoftwareDevelopment,
  },
  {
    path: 'blog/stateful-react-javascript-form-fields-through-redux-data-persistence-and-management',
    component:
      StatefulReactJavascriptFormFieldsThroughReduxDataPersistenceAndManagement,
  },
  {
    path: 'blog/coding-habits-and-mac-local-environments-for-software-development',
    component: CodingHabitsAndMacLocalEnvironmentsForSoftwareDevelopment,
  },
  {
    path: 'blog/layered-cybersecurity-approaches-for-financial-technology-fintech',
    component: LayeredCybersecurityApproachesForFinancialTechnologyFintech,
  },
  {
    path: 'blog/threat-detection-approaches-for-financial-technology-fintech',
    component: ThreatDetectionApproachesForFinancialTechnologyFintech,
  },
  {
    path: 'blog/secure-software-development-and-threat-modeling-approaches-for-financial-technology-fintech',
    component:
      SecureSoftwareDevelopmentAndThreatModelingApproachesForFinancialTechnologyFintech,
  },
  {
    path: 'blog/global-information-security-and-infrastructure-approaches-for-financial-technology-fintech',
    component:
      GlobalInformationSecurityAndInfrastructureApproachesForFinancialTechnologyFintech,
  },
  {
    path: 'blogs',
    redirectTo: 'blog',
    pathMatch: 'full',
  },
];
