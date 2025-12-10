interface ArticleContentProps {
  content: string;
}

const ArticleContent = ({ content }: ArticleContentProps) => {
  return (
    <div 
      className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-lg"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default ArticleContent;