// Copyright 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import XCTest
import Shared
import BraveShared
import WebKit
@testable import Client

class WKWebViewExtensionsTest: XCTestCase {
    func testGenerateJavascriptFunctionString() {
        let webView = BraveWebView(frame: .zero, isPrivate: false)
        var javascript = webView.generateJavascriptFunctionString(functionName: "demo_function", args: [])
        XCTAssertEqual(javascript, "demo_function()")
        
        javascript = webView.generateJavascriptFunctionString(functionName: "demo_function", args: ["a", "b", "c"])
        XCTAssertEqual(javascript, "demo_function('a', 'b', 'c')")
        
        javascript = webView.generateJavascriptFunctionString(functionName: "demo_function", args: ["&", "'", "<", ">", "`"])
        XCTAssertEqual(javascript, "demo_function('&amp;', '&#39;', '&lt;', '&gt;', '&lsquo;')")
        
        javascript = webView.generateJavascriptFunctionString(functionName: "demo_function", args: ["<script>alert(1);</script>"])
        XCTAssertEqual(javascript, "demo_function('&lt;script&gt;alert(1);&lt;/script&gt;')")
        
        javascript = webView.generateJavascriptFunctionString(functionName: "demo_function", args: ["<script>alert(1);</script>"], escapeArgs: false)
        XCTAssertEqual(javascript, "demo_function(<script>alert(1);</script>)")
    }
}
