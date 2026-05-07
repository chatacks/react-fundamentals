interface Items {
  id: number;
  html_url: string;
  created_at: string;
  title: string
  user: {
    login: string;
  };
  comments: number;
  body: string;
}

export interface Issues {
  total_count: number;
  items: Items[]
}
