/**
 * Project:   geoipd
 * User:      av4me
 * Main Repo: github.com/av4me/geoipd
 * Date:      04/05/2013
 * License:   MIT
 */

// inspiration: binarymax & James Khoury @ http://codereview.stackexchange.com/questions/1480/better-more-efficient-way-of-writing-this-javascript-binary-search
Array.prototype.binarysearch = function (i) {
    var l = 0, u = this.length,  m;
    while ( l <= u ) {
        // m = Math.floor((l+u)/2);
        m = ((l+u) >> 1);
        if ( i > this[m].i ) {
            l = m+1;
        } else {
            u = (i == this[m]) ? -2 : m - 1;
        }
    }
    return (u == -2) ? m : -1;
};

