# geoipjson

GeoIPjson is a service to provide GeoIP data, from various sources like http://dev.maxmind.com/geoip/geolite, in a standardized form including:
- JSON as a primary export format, JSONP and other formats to come with time via export plugins
- support the ability to switch GeoIP data services without changing application logic
- support the ability to fail over between GeoIP data services should one or more fail
- support GeoIP data extensions like returning data based upon a consensus vote between GeoIP data sources 
- support GeoIP data source load balancing

Input via chain of Geo Source plugins
Output via format plugin, initially JSON


## License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
