/**
 * Jest testing file for Logger.js.
 * 
 * Run this with ./test.sh in the root of Flash Chord.
 */
const Logger = require('../js2/Logger');

describe("Logger", () => {
    const logger = new Logger();

    // ----------------------------------------
    // Check that functions exist.
    // ----------------------------------------

    test("Functions are properly defined", () => {
        expect(typeof logger.isEnabled).toBe("function");
        expect(typeof logger.enableLogging).toBe("function");
        expect(typeof logger.disableLogging).toBe("function");
        expect(typeof logger.logger).toBe("function");
        expect(typeof logger.loggerNewSection).toBe("function");
        expect(typeof logger.loggerNewBlock).toBe("function");
    });

    // ----------------------------------------
    // Check that functions perform as expected.
    // ----------------------------------------

    test("isEnabled() works as expected", () => {
        const logger = new Logger();

        logger.enabled = true;
        expect(logger.isEnabled()).toBeTruthy();
        logger.enabled = false;
        expect(logger.isEnabled()).toBeFalsy();
    });
    
    test("Constructor works with and without parameters", () => {
        let logger = new Logger();

        expect(logger.isEnabled()).toBeFalsy();
        logger = new Logger(true);
        expect(logger.isEnabled()).toBeTruthy();
        logger = new Logger(false);
        expect(logger.isEnabled()).toBeFalsy();
    });
    
    test("enableLogging() and disableLogging() work", () => {
        const logger = new Logger();

        expect(logger.isEnabled()).toBeFalsy();
        logger.enableLogging();
        expect(logger.isEnabled()).toBeTruthy();
        logger.disableLogging();
        expect(logger.isEnabled()).toBeFalsy();
    });

    test("logger(), loggerNewSection(), and loggerNewBlock() work", () => {
        const logger = new Logger();

        expect(logger.logger("Test message")).toBeFalsy();
        logger.enableLogging();
        expect(logger.logger("Test message")).toBeTruthy();
        expect(logger.loggerNewSection()).toBeTruthy();
        expect(logger.loggerNewBlock()).toBeTruthy();
    });
});
