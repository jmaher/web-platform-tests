test(() => {
  const frame = document.body.appendChild(document.createElement("iframe"));
  assert_equals(frame.contentDocument.URL, "about:blank");
  assert_equals(frame.contentWindow.location.href, "about:blank");
  frame.contentDocument.open();
  assert_equals(frame.contentDocument.URL, document.URL);
  assert_equals(frame.contentWindow.location.href, document.URL);
  // Ensure the load event fires and testharness doesn't timeout
  frame.contentDocument.close();
}, "document.open() and document's URL");