function GitHubPreview({ repo }) {
  const preview = `https://opengraph.githubassets.com/1/${repo}`;

  return (
    <a href={`https://github.com/${repo}`} target="_blank" rel="noopener noreferrer">
      <img
        src={preview}
        alt={`${repo} preview`}
        style={{ borderRadius: "12px", width: "100%", maxWidth: "800px", height: "auto" }}
      />
    </a>
  );
}

export default GitHubPreview;
