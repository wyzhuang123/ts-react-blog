interface COMMENT {
  c_id: string,
  ac_id: string,
  author: string,
  content: string,
  time: string
}

interface COMMENTREPLIES {
  r_id: string,
  cc_id: string | null,
  rc_id: string | null,
  author: string,
  content: string,
  time: string
}

export type{
  COMMENT,
  COMMENTREPLIES
}

