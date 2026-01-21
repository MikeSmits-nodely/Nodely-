import { useEffect } from 'react';

interface MetaTagsConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export function useMetaTags({
  title,
  description,
  keywords = 'AI-modellen, workflow automatisering, bedrijfsprocessen, kunstmatige intelligentie, automatisatie',
  ogImage = 'https://nodely.nl/logo-main.png',
  ogUrl = 'https://nodely.nl',
}: MetaTagsConfig) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta description
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute('content', description);

    // Update or create meta keywords
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
      keywordsTag = document.createElement('meta');
      keywordsTag.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsTag);
    }
    keywordsTag.setAttribute('content', keywords);

    // Update Open Graph tags
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (!ogTitleTag) {
      ogTitleTag = document.createElement('meta');
      ogTitleTag.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleTag);
    }
    ogTitleTag.setAttribute('content', title);

    let ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (!ogDescriptionTag) {
      ogDescriptionTag = document.createElement('meta');
      ogDescriptionTag.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescriptionTag);
    }
    ogDescriptionTag.setAttribute('content', description);

    let ogImageTag = document.querySelector('meta[property="og:image"]');
    if (!ogImageTag) {
      ogImageTag = document.createElement('meta');
      ogImageTag.setAttribute('property', 'og:image');
      document.head.appendChild(ogImageTag);
    }
    ogImageTag.setAttribute('content', ogImage);

    let ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (!ogUrlTag) {
      ogUrlTag = document.createElement('meta');
      ogUrlTag.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlTag);
    }
    ogUrlTag.setAttribute('content', ogUrl);

    // Update Twitter tags
    let twitterTitleTag = document.querySelector('meta[property="twitter:title"]');
    if (!twitterTitleTag) {
      twitterTitleTag = document.createElement('meta');
      twitterTitleTag.setAttribute('property', 'twitter:title');
      document.head.appendChild(twitterTitleTag);
    }
    twitterTitleTag.setAttribute('content', title);

    let twitterDescriptionTag = document.querySelector('meta[property="twitter:description"]');
    if (!twitterDescriptionTag) {
      twitterDescriptionTag = document.createElement('meta');
      twitterDescriptionTag.setAttribute('property', 'twitter:description');
      document.head.appendChild(twitterDescriptionTag);
    }
    twitterDescriptionTag.setAttribute('content', description);

    let twitterImageTag = document.querySelector('meta[property="twitter:image"]');
    if (!twitterImageTag) {
      twitterImageTag = document.createElement('meta');
      twitterImageTag.setAttribute('property', 'twitter:image');
      document.head.appendChild(twitterImageTag);
    }
    twitterImageTag.setAttribute('content', ogImage);
  }, [title, description, keywords, ogImage, ogUrl]);
}
