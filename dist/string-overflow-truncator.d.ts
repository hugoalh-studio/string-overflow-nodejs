/**
 * @class StringOverflowTruncator
 * @description String truncator to truncate the string with the specify length; Safe with the emojis, URLs, and words.
 */
declare class StringOverflowTruncator {
    #private;
    /**
     * @constructor
     * @description Initialize string truncator.
     * @param {number} maximumLength Maximum length of the target string.
     * @param {object} [param1={}] Options.
     * @param {string} [param1.ellipsisMark="..."] Ellipsis mark of the target string.
     * @param {string} [param1.ellipsisPosition="End"] Ellipsis position at the target string.
     * @param {boolean} [param1.safeURLs=true] Whether to prevent URLs get truncated at the target string thus cause issues.
     * @param {boolean} [param1.safeWords=true] Whether to prevent words get truncated at the target string.
     */
    constructor(maximumLength: number, { ellipsisMark, ellipsisPosition, safeURLs, safeWords }?: {
        ellipsisMark?: string;
        ellipsisPosition?: string;
        safeURLs?: boolean;
        safeWords?: boolean;
    });
    /**
     * @method truncate
     * @description Truncate the string.
     * @param {string} item String that need to truncate.
     * @returns {string} A truncated string.
     */
    truncate(item: string): string;
}
export default StringOverflowTruncator;
//# sourceMappingURL=string-overflow-truncator.d.ts.map