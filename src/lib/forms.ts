import { offerSiteConfig } from '../data/offer-site';

export type FormSettings = {
  formProviderName: string;
  formActionUrl: string;
  formMethod: string;
  intakeEmail: string;
  formSuccessMessage: string;
  formFallbackMessage: string;
  intakeFormUrl: string;
  intakeFormEmbedUrl: string;
  intakeFormProviderName: string;
  showEmbeddedIntakeForm: boolean;
  intakeEmailFallback: string;
};

export const getFormSettings = (): FormSettings => ({
  formProviderName: offerSiteConfig.formProviderName.trim(),
  formActionUrl: offerSiteConfig.formActionUrl.trim(),
  formMethod: offerSiteConfig.formMethod.trim().toLowerCase() || 'post',
  intakeEmail: offerSiteConfig.intakeEmail.trim(),
  formSuccessMessage: offerSiteConfig.formSuccessMessage,
  formFallbackMessage: offerSiteConfig.formFallbackMessage,
  intakeFormUrl: offerSiteConfig.intakeFormUrl.trim(),
  intakeFormEmbedUrl: offerSiteConfig.intakeFormEmbedUrl.trim(),
  intakeFormProviderName: offerSiteConfig.intakeFormProviderName.trim(),
  showEmbeddedIntakeForm: offerSiteConfig.showEmbeddedIntakeForm,
  intakeEmailFallback: offerSiteConfig.intakeEmailFallback,
});

export const getFormAttributes = (settings: FormSettings) => (
  settings.formActionUrl
    ? { action: settings.formActionUrl, method: settings.formMethod }
    : { method: settings.formMethod }
);

export const getMailtoHref = (email: string, subject: string) => (
  `mailto:${email}?subject=${encodeURIComponent(subject)}`
);
