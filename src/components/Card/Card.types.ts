export type CardProps = {
  id: number;
  login: string;
  imageUrl: string;
  profileUrl: string;
  duplicatedId?: number;
  dataTestid: string;
};

export type HeaderCardProps = {
  id: number;
  imageUrl: string;
  duplicatedId?: number;
  dataTestid: string;
};

export type TextCardProps = {
  content: (string | number)[];
};
