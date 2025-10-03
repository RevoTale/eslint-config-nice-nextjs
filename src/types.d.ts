declare module '@next/eslint-plugin-next' {
  import type {Plugin,RuleConfig} from '@eslint/config-helpers';
  const nextPlugin: Omit<Plugin,'configs'>&{
    configs: {
      recommended: {
        rules: RuleConfig
      };
      'core-web-vitals': {
        rules:RuleConfig
      };
    };
  };
  export default nextPlugin;
}
