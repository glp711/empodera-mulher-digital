import React from "react";
import { Link } from "react-router-dom";
import { Clock, Calendar, User } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 ${
      featured ? 'border-primary/20 bg-gradient-to-br from-background to-muted/30' : ''
    }`}>
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-medium">
            {article.category}
          </span>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{article.readTime}</span>
          </div>
        </div>
        
        <h3 className={`font-bold group-hover:text-primary transition-colors line-clamp-2 ${
          featured ? 'text-xl' : 'text-lg'
        }`}>
          {article.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-3">
          {article.excerpt}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.publishedAt).toLocaleDateString('pt-PT')}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link to={`/artigo/${article.id}`}>
          <Button 
            variant={featured ? "hero" : "outline"} 
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          >
            Ler Artigo Completo
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;