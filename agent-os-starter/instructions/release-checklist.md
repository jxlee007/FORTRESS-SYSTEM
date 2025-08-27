# Release Checklist

This checklist should be used to ensure that new releases are safe and successful.

## Pre-Release
- [ ] Have all features for the release been completed and tested?
- [ ] Has a security review been completed for all new features?
- [ ] Has the documentation been updated for all new features?
- [ ] Has the release been tested in a staging environment?
- [ ] Has a rollback plan been created in case the release fails?

## Release
- [ ] Create a new release branch from the main branch.
- [ ] Update the version number in `package.json`.
- [ ] Create a new tag for the release in Git.
- [ ] Deploy the release to production.

## Post-Release
- [ ] Monitor the production environment for any issues.
- [ ] Announce the new release to users.
- [ ] Gather feedback from users about the new release.
- [ ] Close the release branch.
- [ ] Create a recap of the release in the `recaps/` directory.

## Rollback
- [ ] Revert the deployment in the hosting provider.
- [ ] Revert the commit that triggered the deployment.
- [ ] Communicate the rollback to users.
- [ ] Investigate the cause of the failure.
