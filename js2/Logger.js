/**
 * Logger class provides an easy way to log to Chrome's console and includes section dividers.
 * 
 * Tested via /tests/Logger.test.js.
 */
module.exports = class Logger {
    enabled = false;

    /**
     * Default constructor assumes debugging to be disabled.
     * 
     * @param {boolean} enabled 
     */
    constructor(enabled) {
        this.enabled = enabled;
    }

    /**
     * Response with true if logging is enabled, false if logging is disabled.
     * 
     * @returns {boolean} Status of logging enablement.
     */
    isEnabled() {
        return this.enabled;
    }

    /**
     * Enables logging even if Logger was instantiated with logging disabled.
     */
    enableLogging() {
        this.enabled = true;
    }

    /**
     * Disables logging even if Logger was instantiated with logging enabled.
     */
    disableLogging() {
        this.enabled = false;
    }

    /**
     * Logs a message to the console if debugging is enabled.
     * 
     * @param {string} message  The message to be written to console.log().
     * @param {boolean} override    Overrides the instance-level setting for logging enabled.
     * @returns {boolean} True if the console.log() command succeeded; false if not.
     */
    logger(message, override = false) {
        let success = false;

        if (this.enabled || override) {
            try {
                console.log(message);

                success = true;
            }
            catch (exception) {
                throw "Console.log not available."
            }
        }

        return success;
    }

    /**
     * Prints a new section divider to the console if logging is enabled.
     * 
     * @param {boolean} override 
     * @param {boolean} override    Overrides the instance-level setting for logging enabled.
     * @returns {boolean} True if the console.log() command succeeded; false if not.
     */
    loggerNewSection(override = false) {
        return this.logger("==========", override);
    }

    /**
     * Prints a sub-block divider line to the console if logging is enabled.
     * @param {boolean} override    Overrides the instance-level setting for logging enabled.
     * @returns {boolean} True if the console.log() command succeeded; false if not.
     */
    /**
     * 
     * @param {*} override 
     * @returns 
     */
    loggerNewBlock(override = false) {
        return this.logger("----------", override);
    }
}
