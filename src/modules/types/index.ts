import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type imageProps = NativeStackScreenProps<RootStackParamList, 'Image'>;
export type homeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type RootStackParamList = {
  Home: undefined;
  Image: { name: string; imageUrl: string };
};

export interface IHomeContentProps {
  data: IResponseApi[];
  onItemPress: any;
}

export interface IResponseApi {
  alt_description?: string;
  blur_hash?: string;
  color?: string;
  created_at?: string;
  current_user_collections?: any;
  description?: any;
  liked_by_user: boolean;
  likes: number;
  links: {
    download: any;
    html: string;
    self: string;
  };
  promoted_at?: string;
  sponsorship?: any;
  topic_submissions?: any;
  updated_at?: string;
  urls: {
    raw?: string;
    full?: string;
    regular: string;
    small?: string;
    thumb?: string;
    small_s3?: string;
  };
  user: {
    accepted_tos?: boolean;
    bio?: string;
    first_name?: string;
    for_hire?: any;
    id?: string;
    instagram_username?: any;
    last_name?: any;
    links?: any;
    location?: string;
    name: string;
    portfolio_url?: any;
    profile_image?: any;
    social?: any;
    total_collections?: number;
    total_likes?: number;
    total_photos?: number;
    twitter_username?: any;
    updated_at?: string;
    username?: string;
  };
  width?: number;
}
