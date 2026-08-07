import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export function getSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = getSupabaseClient();

export const getUser = async () => {
  const client = getSupabaseClient();
  if (!client) return null;
  const { data: { user } } = await client.auth.getUser();
  return user;
};

export const getProfile = async (userId: string) => {
  const client = getSupabaseClient();
  if (!client) return null;
  const { data } = await client.from("profiles").select("*").eq("id", userId).single();
  return data;
};

export const getCurrentProfile = async () => {
  const user = await getUser();
  if (!user?.id) return null;
  return getProfile(user.id);
};