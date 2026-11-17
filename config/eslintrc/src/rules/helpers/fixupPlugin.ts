import { fixupPluginRules } from "@eslint/compat";

/**
 * Wraps a legacy plugin (written for ESLint <= 9) so its rules keep working on ESLint 10,
 * by restoring removed `context` APIs (`getSourceCode`, `getFilename`, `getScope`, ...).
 *
 * @param plugin - Plugin module object.
 * @returns Patched plugin.
 */
export const fixupPlugin = (plugin: unknown): any => fixupPluginRules(plugin as Parameters<typeof fixupPluginRules>[0]);

export default fixupPlugin;
