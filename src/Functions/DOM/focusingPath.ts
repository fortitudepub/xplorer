import os from 'os';
import path from 'path';
import storage from 'electron-json-storage-sync';
import windowGUID from '../../Constants/windowGUID';

/**
 * Get the tab focusing path
 * @returns {string}
 */
const focusingPath = (): string => {
	const tabs = storage.get(`tabs-${windowGUID}`)?.data;
	return tabs.tabs[tabs.focus].position === 'Home' ||
		tabs.tabs[tabs.focus].position === path.join(os.homedir(), 'Home') ||
		tabs.tabs[tabs.focus].position === 'xplorer://Home'
		? os.homedir()
		: tabs.tabs[tabs.focus].position;
};

export default focusingPath;
