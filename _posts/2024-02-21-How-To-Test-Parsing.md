---
layout: template
title: How to Test Parsing
date:  2024-02-21 07:32:53 -0700
categories: [Resources]
---

<h1>{{ page.title }}:</h1>

<p>TTP: Issue 65/WCAG: 4.1.1 - uses the <a href="https://validator.w3.org/nu/" style="color: blue;" target="_blank"><u>Nu HTML Checker</u></a> and supporting bookmarklets:</p>
<ol>
  <li>Open <a href="https://validator.w3.org/nu/about.html" style="color: blue;" target="_blank"><u>About the Nu HTML Checker</u></a> in a new browser window.</li>
  <li>Add these two bookmarklets to your browser bookmarks:
    <ol type="a">
      <li>Check serialized DOM of current page</li>
      <li>Check for WCAG 2.0 parsing compliance<br/>
        <small>(Mouse users can simply drag the corresponding links from the page to the browser bookmarks bar. Keyboard users can follow these instructions.)</small></li>
      </ol>
    </li>
    <li>Go to the browser tab containing your target page and, in that browser window, select the first bookmarklet. It will send the page's DOM to the checker and show the results in a new browser tab.</li>
    <li>Go to the browser tab containing the checker results and, in that browser window, select the second bookmarklet. It will filter the results to show only WCAG parsing errors.</li>
    <li>Examine the filtered results to verify that there are no errors related to:
      <ol type="a">
        <li>Missing start or end tags</li>
        <li>Duplicate attributes</li>
        <li>Improper nesting of elements</li>
      </ol>
    </li>
    <li>Record your results:
      <ol type="a">
        <li>If you find any failures, select <strong>Fail</strong>, then add them as failure instances.</li>
        <li>Otherwise, select <strong>Pass</strong>.</li>
      </ol>
    </li>
  </ol>
