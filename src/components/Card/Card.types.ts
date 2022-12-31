export type CardProps = {
  id: number;
  login: string;
  imageUrl: string;
  profileUrl: string;
};

export type HeaderCardProps = {
  id: number;
  imageUrl: string;
};

export type TextCardProps = {
  content: (string | number)[];
};
