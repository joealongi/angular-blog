import { Routes } from '@angular/router';

// pages
import { Home } from './components/home/home';
import { Blog } from './components/blog/blog';

// blogs
import { CompendiumOfBitwiseNomenclatureFromApplicationsToCybersecurity } from './blogs/compendium-of-bitwise-nomenclature-from-applications-to-cybersecurity/compendium-of-bitwise-nomenclature-from-applications-to-cybersecurity';
import { CodingHabitsAndMacLocalEnvironmentsForSoftwareDevelopment } from './blogs/coding-habits-and-mac-local-environments-for-software-development/coding-habits-and-mac-local-environments-for-software-development';

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
];
