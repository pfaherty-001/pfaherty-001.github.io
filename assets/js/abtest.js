<!-- After adding this script, call setConsentBannerParams({uuid: <unique id> }) to set unique ID for a customer.  -->
<script>
(function () {
	var s = document.createElement('script');
	s.src = 'https://cdn-prod.securiti.ai/consent/cookie-consent-sdk-loader.js';
	s.setAttribute('data-tenant-uuid', 'ed91c418-0537-4d55-90cb-bcb3c584dd65');
	s.setAttribute('data-domain-uuid', '8f93c5bd-92c3-48e6-b106-9d3bc4df495c');
	s.setAttribute('data-backend-url', 'https://app.securiti.ai');
	s.setAttribute('data-skip-css', 'false');
	s.defer = true;
	var parent_node = document.head || document.body;
	parent_node.appendChild(s);
})()
</script>
