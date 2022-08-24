import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GetPeopleListInput = {
  /** Pagination number of set of people list query, is optional */
  page?: InputMaybe<Scalars['Int']>;
  /** Search from form input for list or specific person, is optional */
  search?: InputMaybe<Scalars['String']>;
};

export type GetPeopleListResponseData = {
  __typename?: 'GetPeopleListResponseData';
  /** Total number count of the people list */
  count?: Maybe<Scalars['Int']>;
  /** Pagination next link */
  next?: Maybe<Scalars['String']>;
  /** Array of the collection of an Person */
  people?: Maybe<Array<Maybe<Person>>>;
  /** Pagination previous link */
  previous?: Maybe<Scalars['String']>;
};

export type Person = {
  __typename?: 'Person';
  /** Birth year of the person */
  birth_year?: Maybe<Scalars['String']>;
  /** Eye color of the person */
  eye_color?: Maybe<Scalars['String']>;
  /** Gender of the person */
  gender?: Maybe<Scalars['String']>;
  /** Hair color of the person */
  hair_color?: Maybe<Scalars['String']>;
  /** Height of the person */
  height?: Maybe<Scalars['String']>;
  /** Homeworld url address of the person */
  homeworld?: Maybe<Scalars['String']>;
  /** Unique identity map from the list of the people */
  id?: Maybe<Scalars['Int']>;
  /** Mass of the person */
  mass?: Maybe<Scalars['String']>;
  /** Name of the person */
  name?: Maybe<Scalars['String']>;
  /** Skin color of the person */
  skin_color?: Maybe<Scalars['String']>;
  /** Url address to the person profile */
  url?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** A query to fetch the list of people optionally by page or search parameter */
  getPeopleList?: Maybe<GetPeopleListResponseData>;
  /** A query to fetch the details of person by the person ID */
  getPersonById?: Maybe<Person>;
};


export type QueryGetPeopleListArgs = {
  input?: InputMaybe<GetPeopleListInput>;
};


export type QueryGetPersonByIdArgs = {
  id: Scalars['Int'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  GetPeopleListInput: GetPeopleListInput;
  GetPeopleListResponseData: ResolverTypeWrapper<GetPeopleListResponseData>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Person: ResolverTypeWrapper<Person>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  GetPeopleListInput: GetPeopleListInput;
  GetPeopleListResponseData: GetPeopleListResponseData;
  Int: Scalars['Int'];
  Person: Person;
  Query: {};
  String: Scalars['String'];
};

export type GetPeopleListResponseDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetPeopleListResponseData'] = ResolversParentTypes['GetPeopleListResponseData']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  people?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  birth_year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eye_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hair_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  homeworld?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  skin_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getPeopleList?: Resolver<Maybe<ResolversTypes['GetPeopleListResponseData']>, ParentType, ContextType, Partial<QueryGetPeopleListArgs>>;
  getPersonById?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryGetPersonByIdArgs, 'id'>>;
};

export type Resolvers<ContextType = any> = {
  GetPeopleListResponseData?: GetPeopleListResponseDataResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

