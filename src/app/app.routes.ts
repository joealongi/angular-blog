import { Routes } from '@angular/router';

// pages
import { Home } from './components/home/home';
import { Blog } from './components/blog/blog';

// blogs
import { CompendiumOfBitwiseNomenclatureFromApplicationsToCybersecurity } from './blogs/compendium-of-bitwise-nomenclature-from-applications-to-cybersecurity/compendium-of-bitwise-nomenclature-from-applications-to-cybersecurity';
import { CodingHabitsAndMacLocalEnvironmentsForSoftwareDevelopment } from './blogs/coding-habits-and-mac-local-environments-for-software-development/coding-habits-and-mac-local-environments-for-software-development';
import { ComputingAndSecureWorkHabitsForSoftwareDevelopment } from './blogs/computing-and-secure-work-habits-for-software-development/computing-and-secure-work-habits-for-software-development';
import { GlobalInformationSecurityAndInfrastructureApproachesForFinancialTechnologyFintech } from './blogs/global-information-security-and-infrastructure-approaches-for-financial-technology-fintech/global-information-security-and-infrastructure-approaches-for-financial-technology-fintech';
import { StatefulReactJavascriptFormFieldsThroughReduxDataPersistenceAndManagement } from './blogs/stateful-react-javascript-form-fields-through-redux-data-persistence-and-management/stateful-react-javascript-form-fields-through-redux-data-persistence-and-management';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: Blog },
  {
    path: 'blog/compendium-of-bitwise-nomenclature-from-applications-to-cybersecurity',
    component: CompendiumOfBitwiseNomenclatureFromApplicationsToCybersecurity,
  },
  {
    path: 'blog/coding-habits-and-mac-local-environments-for-software-development',
    component: CodingHabitsAndMacLocalEnvironmentsForSoftwareDevelopment,
  },
  {
    path: 'blog/computing-and-secure-work-habits-for-software-development',
    component: ComputingAndSecureWorkHabitsForSoftwareDevelopment,
  },
  {
    path: 'blog/global-information-security-and-infrastructure-approaches-for-financial-technology-fintech',
    component:
      GlobalInformationSecurityAndInfrastructureApproachesForFinancialTechnologyFintech,
  },
  {
    path: 'blog/stateful-react-javascript-form-fields-through-redux-data-persistence-and-management',
    component:
      StatefulReactJavascriptFormFieldsThroughReduxDataPersistenceAndManagement,
  },
];
