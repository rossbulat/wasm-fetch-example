use serde::{Deserialize, Serialize};

/// A struct to hold some data from the github Branch API.
///
/// Note how we don't have to define every member -- serde will ignore extra
/// data when deserializing
#[derive(Debug, Serialize, Deserialize)]
pub struct Branch {
  pub name: String,
  pub commit: Commit,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Commit {
  pub sha: String,
  pub commit: CommitDetails,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CommitDetails {
  pub author: Signature,
  pub committer: Signature,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Signature {
  pub name: String,
  pub email: String,
}
