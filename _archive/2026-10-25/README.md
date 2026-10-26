# Previous website source

This is the complete tracked website source before the redesign on 25 October 2026.
It includes the original layouts, pages, configuration, images, downloads, and workflows.
The Git database and untracked local files are not included.

The entire `_archive` directory is explicitly excluded in the new `_config.yml`.
This backup therefore stays available in the GitHub repository without becoming a
published page or replacing the redesigned homepage. This is a publishing exclusion,
not an access restriction: repository readers can still download the archive.

Download and extract `site-before-redesign.zip` into a separate folder to inspect
the old source. `SNAPSHOT.json` records the baseline commit and SHA-256 of every file.

For a normal rollback after committing the redesign, revert that redesign commit
with GitHub Desktop or `git revert <redesign-commit-sha>`, then push the revert to
the existing publishing branch. Keep the redesign changes in one commit so this
rollback is straightforward. Review conflicts if later changes touch the same files.
