declare module '@next/eslint-plugin-next' {
  import type {Plugin,RuleEntry} from '@eslint/config-helpers';
  const nextPlugin: Omit<Plugin,'configs'>&{
    configs: {
      recommended: {
        rules: Record<string,RuleEntry>
      };
      'core-web-vitals': {
        rules: Record<string, RuleEntry>;
      };
    };
  };
  export default nextPlugin;
}
